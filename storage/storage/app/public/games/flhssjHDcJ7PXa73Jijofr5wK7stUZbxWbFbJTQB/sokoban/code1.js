gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDDesertBackground2Objects1= [];
gdjs.MenuCode.GDDesertBackground2Objects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDBrownButtonWithShadowObjects1= [];
gdjs.MenuCode.GDBrownButtonWithShadowObjects2= [];
gdjs.MenuCode.GDBrownButtonWithShadow2Objects1= [];
gdjs.MenuCode.GDBrownButtonWithShadow2Objects2= [];
gdjs.MenuCode.GDBrownButtonWithShadow3Objects1= [];
gdjs.MenuCode.GDBrownButtonWithShadow3Objects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "i-love-my-8-bit-game-console-301272.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.MenuCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBrownButtonWithShadowObjects1[k] = gdjs.MenuCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow2"), gdjs.MenuCode.GDBrownButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBrownButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBrownButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBrownButtonWithShadow2Objects1[k] = gdjs.MenuCode.GDBrownButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBrownButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match02", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow3"), gdjs.MenuCode.GDBrownButtonWithShadow3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBrownButtonWithShadow3Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBrownButtonWithShadow3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBrownButtonWithShadow3Objects1[k] = gdjs.MenuCode.GDBrownButtonWithShadow3Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBrownButtonWithShadow3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match03", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDDesertBackground2Objects1.length = 0;
gdjs.MenuCode.GDDesertBackground2Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow2Objects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow2Objects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow3Objects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow3Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDDesertBackground2Objects1.length = 0;
gdjs.MenuCode.GDDesertBackground2Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow2Objects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow2Objects2.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow3Objects1.length = 0;
gdjs.MenuCode.GDBrownButtonWithShadow3Objects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
