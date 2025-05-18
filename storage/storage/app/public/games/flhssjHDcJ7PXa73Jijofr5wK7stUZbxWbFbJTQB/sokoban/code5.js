gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.GDDesertBackground2Objects1= [];
gdjs.WinCode.GDDesertBackground2Objects2= [];
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDBrownButtonWithShadowObjects1= [];
gdjs.WinCode.GDBrownButtonWithShadowObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "8-bit-video-game-win-level-sound-version-1-145827.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.WinCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDBrownButtonWithShadowObjects1[k] = gdjs.WinCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match02", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDDesertBackground2Objects1.length = 0;
gdjs.WinCode.GDDesertBackground2Objects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.WinCode.GDBrownButtonWithShadowObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDDesertBackground2Objects1.length = 0;
gdjs.WinCode.GDDesertBackground2Objects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.WinCode.GDBrownButtonWithShadowObjects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
