import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        url.map(link => {
            // Create script
            const script = document.createElement('script');
            script.src = link;

            // Add script to document body
            document.body.appendChild(script);

            // Remove script to document body
            return () => {
                document.body.removeChild(script)
            };

        })
    }, [url]);
};

export default useScript;