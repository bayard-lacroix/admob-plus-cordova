// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
export var NativeActions;
(function (NativeActions) {
    NativeActions["adCreate"] = "adCreate";
    NativeActions["adHide"] = "adHide";
    NativeActions["adIsLoaded"] = "adIsLoaded";
    NativeActions["adLoad"] = "adLoad";
    NativeActions["adShow"] = "adShow";
    NativeActions["bannerConfig"] = "bannerConfig";
    NativeActions["bannerHide"] = "bannerHide";
    NativeActions["bannerLoad"] = "bannerLoad";
    NativeActions["bannerShow"] = "bannerShow";
    NativeActions["configRequest"] = "configRequest";
    NativeActions["configure"] = "configure";
    NativeActions["interstitialIsLoaded"] = "interstitialIsLoaded";
    NativeActions["interstitialLoad"] = "interstitialLoad";
    NativeActions["interstitialShow"] = "interstitialShow";
    NativeActions["ready"] = "ready";
    NativeActions["requestTrackingAuthorization"] = "requestTrackingAuthorization";
    NativeActions["rewardedInterstitialIsLoaded"] = "rewardedInterstitialIsLoaded";
    NativeActions["rewardedInterstitialLoad"] = "rewardedInterstitialLoad";
    NativeActions["rewardedInterstitialShow"] = "rewardedInterstitialShow";
    NativeActions["rewardedIsLoaded"] = "rewardedIsLoaded";
    NativeActions["rewardedLoad"] = "rewardedLoad";
    NativeActions["rewardedShow"] = "rewardedShow";
    NativeActions["setAppMuted"] = "setAppMuted";
    NativeActions["setAppVolume"] = "setAppVolume";
    NativeActions["start"] = "start";
})(NativeActions || (NativeActions = {}));
export var Events;
(function (Events) {
    Events["adClick"] = "admob.ad.click";
    Events["adDismiss"] = "admob.ad.dismiss";
    Events["adImpression"] = "admob.ad.impression";
    Events["adLoad"] = "admob.ad.load";
    Events["adLoadFail"] = "admob.ad.loadfail";
    Events["adReward"] = "admob.ad.reward";
    Events["adShow"] = "admob.ad.show";
    Events["adShowFail"] = "admob.ad.showfail";
    Events["bannerClick"] = "admob.banner.click";
    Events["bannerClose"] = "admob.banner.close";
    Events["bannerImpression"] = "admob.banner.impression";
    Events["bannerLoad"] = "admob.banner.load";
    Events["bannerLoadFail"] = "admob.banner.loadfail";
    Events["bannerOpen"] = "admob.banner.open";
    Events["bannerSize"] = "admob.banner.size";
    Events["bannerSizeChange"] = "admob.banner.sizechange";
    Events["interstitialDismiss"] = "admob.interstitial.dismiss";
    Events["interstitialImpression"] = "admob.interstitial.impression";
    Events["interstitialLoad"] = "admob.interstitial.load";
    Events["interstitialLoadFail"] = "admob.interstitial.loadfail";
    Events["interstitialShow"] = "admob.interstitial.show";
    Events["interstitialShowFail"] = "admob.interstitial.showfail";
    Events["ready"] = "admob.ready";
    Events["rewardedDismiss"] = "admob.rewarded.dismiss";
    Events["rewardedImpression"] = "admob.rewarded.impression";
    Events["rewardedInterstitialDismiss"] = "admob.rewardedi.dismiss";
    Events["rewardedInterstitialImpression"] = "admob.rewardedi.impression";
    Events["rewardedInterstitialLoad"] = "admob.rewardedi.load";
    Events["rewardedInterstitialLoadFail"] = "admob.rewardedi.loadfail";
    Events["rewardedInterstitialReward"] = "admob.rewardedi.reward";
    Events["rewardedInterstitialShow"] = "admob.rewardedi.show";
    Events["rewardedInterstitialShowFail"] = "admob.rewardedi.showfail";
    Events["rewardedLoad"] = "admob.rewarded.load";
    Events["rewardedLoadFail"] = "admob.rewarded.loadfail";
    Events["rewardedReward"] = "admob.rewarded.reward";
    Events["rewardedShow"] = "admob.rewarded.show";
    Events["rewardedShowFail"] = "admob.rewarded.showfail";
})(Events || (Events = {}));
export var AdSizeType;
(function (AdSizeType) {
    AdSizeType[AdSizeType["BANNER"] = 0] = "BANNER";
    AdSizeType[AdSizeType["LARGE_BANNER"] = 1] = "LARGE_BANNER";
    AdSizeType[AdSizeType["MEDIUM_RECTANGLE"] = 2] = "MEDIUM_RECTANGLE";
    AdSizeType[AdSizeType["FULL_BANNER"] = 3] = "FULL_BANNER";
    AdSizeType[AdSizeType["LEADERBOARD"] = 4] = "LEADERBOARD";
    AdSizeType[AdSizeType["SMART_BANNER"] = 5] = "SMART_BANNER";
})(AdSizeType || (AdSizeType = {}));
export var execAsync = function (action, args) {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'AdMob', action, args);
    });
};
export function waitEvent(successEvent, failEvent) {
    if (failEvent === void 0) { failEvent = ''; }
    return new Promise(function (resolve, reject) {
        document.addEventListener(successEvent, function (event) {
            resolve(event);
        }, false);
        if (failEvent) {
            document.addEventListener(failEvent, function (failedEvent) {
                reject(failedEvent);
            }, false);
        }
    });
}
export var initPlugin = function () {
    document.addEventListener('deviceready', function () {
        cordova.exec(function (event) {
            cordova.fireDocumentEvent(event.type, event.data);
        }, console.error, 'AdMob', NativeActions.ready);
    }, false);
};
//# sourceMappingURL=generated.js.map