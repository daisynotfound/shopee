gdjs.PetunjukGameCode = {};
gdjs.PetunjukGameCode.localVariables = [];
gdjs.PetunjukGameCode.GDDesertBackground2Objects1= [];
gdjs.PetunjukGameCode.GDDesertBackground2Objects2= [];
gdjs.PetunjukGameCode.GDNewTextObjects1= [];
gdjs.PetunjukGameCode.GDNewTextObjects2= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects2= [];
gdjs.PetunjukGameCode.GDIconBackgroundObjects1= [];
gdjs.PetunjukGameCode.GDIconBackgroundObjects2= [];
gdjs.PetunjukGameCode.GDNewText2Objects1= [];
gdjs.PetunjukGameCode.GDNewText2Objects2= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects2= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1= [];
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects2= [];


gdjs.PetunjukGameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "i-love-my-8-bit-game-console-301272.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1[k] = gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Match01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow2"), gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1[k] = gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow3"), gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1.length;i<l;++i) {
    if ( gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1[k] = gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1[i];
        ++k;
    }
}
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.PetunjukGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PetunjukGameCode.GDDesertBackground2Objects1.length = 0;
gdjs.PetunjukGameCode.GDDesertBackground2Objects2.length = 0;
gdjs.PetunjukGameCode.GDNewTextObjects1.length = 0;
gdjs.PetunjukGameCode.GDNewTextObjects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.PetunjukGameCode.GDIconBackgroundObjects1.length = 0;
gdjs.PetunjukGameCode.GDIconBackgroundObjects2.length = 0;
gdjs.PetunjukGameCode.GDNewText2Objects1.length = 0;
gdjs.PetunjukGameCode.GDNewText2Objects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects2.length = 0;

gdjs.PetunjukGameCode.eventsList0(runtimeScene);
gdjs.PetunjukGameCode.GDDesertBackground2Objects1.length = 0;
gdjs.PetunjukGameCode.GDDesertBackground2Objects2.length = 0;
gdjs.PetunjukGameCode.GDNewTextObjects1.length = 0;
gdjs.PetunjukGameCode.GDNewTextObjects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.PetunjukGameCode.GDIconBackgroundObjects1.length = 0;
gdjs.PetunjukGameCode.GDIconBackgroundObjects2.length = 0;
gdjs.PetunjukGameCode.GDNewText2Objects1.length = 0;
gdjs.PetunjukGameCode.GDNewText2Objects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow2Objects2.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects1.length = 0;
gdjs.PetunjukGameCode.GDBrownButtonWithShadow3Objects2.length = 0;


return;

}

gdjs['PetunjukGameCode'] = gdjs.PetunjukGameCode;
