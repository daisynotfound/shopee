gdjs.LoseCode = {};
gdjs.LoseCode.localVariables = [];
gdjs.LoseCode.GDDesertBackground2Objects1= [];
gdjs.LoseCode.GDDesertBackground2Objects2= [];
gdjs.LoseCode.GDNewTextObjects1= [];
gdjs.LoseCode.GDNewTextObjects2= [];
gdjs.LoseCode.GDBrownButtonWithShadowObjects1= [];
gdjs.LoseCode.GDBrownButtonWithShadowObjects2= [];


gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game-over-39-199830.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.LoseCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LoseCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseCode.GDBrownButtonWithShadowObjects1[k] = gdjs.LoseCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LoseCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match01", false);
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDDesertBackground2Objects1.length = 0;
gdjs.LoseCode.GDDesertBackground2Objects2.length = 0;
gdjs.LoseCode.GDNewTextObjects1.length = 0;
gdjs.LoseCode.GDNewTextObjects2.length = 0;
gdjs.LoseCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.LoseCode.GDBrownButtonWithShadowObjects2.length = 0;

gdjs.LoseCode.eventsList0(runtimeScene);
gdjs.LoseCode.GDDesertBackground2Objects1.length = 0;
gdjs.LoseCode.GDDesertBackground2Objects2.length = 0;
gdjs.LoseCode.GDNewTextObjects1.length = 0;
gdjs.LoseCode.GDNewTextObjects2.length = 0;
gdjs.LoseCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.LoseCode.GDBrownButtonWithShadowObjects2.length = 0;


return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
