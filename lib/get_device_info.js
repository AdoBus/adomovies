export async function getDeviceInfo(req) {
    /**
     * This function is for get device informations for any user activites
     * We get this information through user agent and API from keycdn for 
     * ip location tracking
     */
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const browser = req.headers['user-agent'];
    const DeviceDetector = require('node-device-detector')
    const deviceDetector = new DeviceDetector;
    const device = deviceDetector.detect(browser);

    const getLocation = async () => {
        const response = await fetch(`https://tools.keycdn.com/geo.json?host=${ip}}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'keycdn-tools:https://adomovies.com'
                },
            });
        const data = await response.json();
        return data;
    }
    const location = await getLocation();
    const deviceInfo = {
        ip: ip,
        browserName: device['client']['name'],
        deviceType: device['device']['type'],
        deviceBrand: device['device']['brand'],
        deviceModel: device['device']['model'],
        osName: device['os']['name'],
        osVersion: device['os']['version'],
        country: location['data']['geo']['country_name'],
        region: location['data']['geo']['region_name'],
        city: location['data']['geo']['city'],
        latitude: location['data']['geo']['latitude'],
        longitude: location['data']['geo']['longitude'],
        timezone: location['data']['geo']['timezone'],
        isp: location['data']['geo']['isp'],
        asn: location['data']['geo']['asn'],
        userAgent: browser
    }
    return deviceInfo;
}