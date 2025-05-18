gdjs.Win2Code = {};
gdjs.Win2Code.localVariables = [];
gdjs.Win2Code.GDDesertBackground2Objects1= [];
gdjs.Win2Code.GDDesertBackground2Objects2= [];
gdjs.Win2Code.GDNewTextObjects1= [];
gdjs.Win2Code.GDNewTextObjects2= [];
gdjs.Win2Code.GDBrownButtonWithShadowObjects1= [];
gdjs.Win2Code.GDBrownButtonWithShadowObjects2= [];


gdjs.Win2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "8-bit-video-game-win-level-sound-version-1-145827.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.Win2Code.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win2Code.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Win2Code.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Win2Code.GDBrownButtonWithShadowObjects1[k] = gdjs.Win2Code.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Win2Code.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match03", false);
}}

}


};

gdjs.Win2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win2Code.GDDesertBackground2Objects1.length = 0;
gdjs.Win2Code.GDDesertBackground2Objects2.length = 0;
gdjs.Win2Code.GDNewTextObjects1.length = 0;
gdjs.Win2Code.GDNewTextObjects2.length = 0;
gdjs.Win2Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Win2Code.GDBrownButtonWithShadowObjects2.length = 0;

gdjs.Win2Code.eventsList0(runtimeScene);
gdjs.Win2Code.GDDesertBackground2Objects1.length = 0;
gdjs.Win2Code.GDDesertBackground2Objects2.length = 0;
gdjs.Win2Code.GDNewTextObjects1.length = 0;
gdjs.Win2Code.GDNewTextObjects2.length = 0;
gdjs.Win2Code.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.Win2Code.GDBrownButtonWithShadowObjects2.length = 0;


return;

}

gdjs['Win2Code'] = gdjs.Win2Code;
