gdjs.Match03Code = {};
gdjs.Match03Code.localVariables = [];
gdjs.Match03Code.GDBlueGoalObjects2_1final = [];

gdjs.Match03Code.GDDownKeyObjects1_1final = [];

gdjs.Match03Code.GDDownKeyObjects2_1final = [];

gdjs.Match03Code.GDGoalAbuObjects2_1final = [];

gdjs.Match03Code.GDGoalCoklatObjects2_1final = [];

gdjs.Match03Code.GDGoalHijauObjects2_1final = [];

gdjs.Match03Code.GDLeftKeyObjects1_1final = [];

gdjs.Match03Code.GDLeftKeyObjects2_1final = [];

gdjs.Match03Code.GDMarkerObjects2_1final = [];

gdjs.Match03Code.GDRedGoalObjects2_1final = [];

gdjs.Match03Code.GDRightKeyObjects1_1final = [];

gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2_1final = [];

gdjs.Match03Code.GDUpKeyObjects1_1final = [];

gdjs.Match03Code.GDUpKeyObjects2_1final = [];

gdjs.Match03Code.GDPlayerObjects1= [];
gdjs.Match03Code.GDPlayerObjects2= [];
gdjs.Match03Code.GDPlayerObjects3= [];
gdjs.Match03Code.GDBoxObjects1= [];
gdjs.Match03Code.GDBoxObjects2= [];
gdjs.Match03Code.GDBoxObjects3= [];
gdjs.Match03Code.GDMarkerObjects1= [];
gdjs.Match03Code.GDMarkerObjects2= [];
gdjs.Match03Code.GDMarkerObjects3= [];
gdjs.Match03Code.GDFloorObjects1= [];
gdjs.Match03Code.GDFloorObjects2= [];
gdjs.Match03Code.GDFloorObjects3= [];
gdjs.Match03Code.GDGoalObjects1= [];
gdjs.Match03Code.GDGoalObjects2= [];
gdjs.Match03Code.GDGoalObjects3= [];
gdjs.Match03Code.GDResetGameButtonObjects1= [];
gdjs.Match03Code.GDResetGameButtonObjects2= [];
gdjs.Match03Code.GDResetGameButtonObjects3= [];
gdjs.Match03Code.GDYouWinObjects1= [];
gdjs.Match03Code.GDYouWinObjects2= [];
gdjs.Match03Code.GDYouWinObjects3= [];
gdjs.Match03Code.GDUpKeyObjects1= [];
gdjs.Match03Code.GDUpKeyObjects2= [];
gdjs.Match03Code.GDUpKeyObjects3= [];
gdjs.Match03Code.GDRightKeyObjects1= [];
gdjs.Match03Code.GDRightKeyObjects2= [];
gdjs.Match03Code.GDRightKeyObjects3= [];
gdjs.Match03Code.GDLeftKeyObjects1= [];
gdjs.Match03Code.GDLeftKeyObjects2= [];
gdjs.Match03Code.GDLeftKeyObjects3= [];
gdjs.Match03Code.GDDownKeyObjects1= [];
gdjs.Match03Code.GDDownKeyObjects2= [];
gdjs.Match03Code.GDDownKeyObjects3= [];
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects1= [];
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2= [];
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3= [];
gdjs.Match03Code.GDTimerObjects1= [];
gdjs.Match03Code.GDTimerObjects2= [];
gdjs.Match03Code.GDTimerObjects3= [];
gdjs.Match03Code.GDNewSpriteObjects1= [];
gdjs.Match03Code.GDNewSpriteObjects2= [];
gdjs.Match03Code.GDNewSpriteObjects3= [];
gdjs.Match03Code.GDRedBoxObjects1= [];
gdjs.Match03Code.GDRedBoxObjects2= [];
gdjs.Match03Code.GDRedBoxObjects3= [];
gdjs.Match03Code.GDBlueBoxObjects1= [];
gdjs.Match03Code.GDBlueBoxObjects2= [];
gdjs.Match03Code.GDBlueBoxObjects3= [];
gdjs.Match03Code.GDOrangeLeavesObjects1= [];
gdjs.Match03Code.GDOrangeLeavesObjects2= [];
gdjs.Match03Code.GDOrangeLeavesObjects3= [];
gdjs.Match03Code.GDBlueGoalObjects1= [];
gdjs.Match03Code.GDBlueGoalObjects2= [];
gdjs.Match03Code.GDBlueGoalObjects3= [];
gdjs.Match03Code.GDRedGoalObjects1= [];
gdjs.Match03Code.GDRedGoalObjects2= [];
gdjs.Match03Code.GDRedGoalObjects3= [];
gdjs.Match03Code.GDGoalCoklatObjects1= [];
gdjs.Match03Code.GDGoalCoklatObjects2= [];
gdjs.Match03Code.GDGoalCoklatObjects3= [];
gdjs.Match03Code.GDSandObjects1= [];
gdjs.Match03Code.GDSandObjects2= [];
gdjs.Match03Code.GDSandObjects3= [];
gdjs.Match03Code.GDBoxAbuObjects1= [];
gdjs.Match03Code.GDBoxAbuObjects2= [];
gdjs.Match03Code.GDBoxAbuObjects3= [];
gdjs.Match03Code.GDGoalAbuObjects1= [];
gdjs.Match03Code.GDGoalAbuObjects2= [];
gdjs.Match03Code.GDGoalAbuObjects3= [];
gdjs.Match03Code.GDBoxHijauObjects1= [];
gdjs.Match03Code.GDBoxHijauObjects2= [];
gdjs.Match03Code.GDBoxHijauObjects3= [];
gdjs.Match03Code.GDGoalHijauObjects1= [];
gdjs.Match03Code.GDGoalHijauObjects2= [];
gdjs.Match03Code.GDGoalHijauObjects3= [];


gdjs.Match03Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11763628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownKey"), gdjs.Match03Code.GDDownKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftKey"), gdjs.Match03Code.GDLeftKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightKey"), gdjs.Match03Code.GDRightKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpKey"), gdjs.Match03Code.GDUpKeyObjects1);
{for(var i = 0, len = gdjs.Match03Code.GDUpKeyObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDUpKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Match03Code.GDRightKeyObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDRightKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Match03Code.GDLeftKeyObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDLeftKeyObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Match03Code.GDDownKeyObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDDownKeyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Match03Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Match03Code.GDLeftKeyObjects1, gdjs.Match03Code.GDLeftKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDLeftKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDLeftKeyObjects1, gdjs.Match03Code.GDLeftKeyObjects3);

for (var i = 0, k = 0, l = gdjs.Match03Code.GDLeftKeyObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDLeftKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDLeftKeyObjects3[k] = gdjs.Match03Code.GDLeftKeyObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDLeftKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDLeftKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDLeftKeyObjects2_1final.indexOf(gdjs.Match03Code.GDLeftKeyObjects3[j]) === -1 )
            gdjs.Match03Code.GDLeftKeyObjects2_1final.push(gdjs.Match03Code.GDLeftKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDLeftKeyObjects2_1final, gdjs.Match03Code.GDLeftKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(64));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(gdjs.Match03Code.GDDownKeyObjects1, gdjs.Match03Code.GDDownKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDDownKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDDownKeyObjects1, gdjs.Match03Code.GDDownKeyObjects3);

for (var i = 0, k = 0, l = gdjs.Match03Code.GDDownKeyObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDDownKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDDownKeyObjects3[k] = gdjs.Match03Code.GDDownKeyObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDDownKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDDownKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDDownKeyObjects2_1final.indexOf(gdjs.Match03Code.GDDownKeyObjects3[j]) === -1 )
            gdjs.Match03Code.GDDownKeyObjects2_1final.push(gdjs.Match03Code.GDDownKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDDownKeyObjects2_1final, gdjs.Match03Code.GDDownKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(64);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

gdjs.copyArray(gdjs.Match03Code.GDUpKeyObjects1, gdjs.Match03Code.GDUpKeyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDUpKeyObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDUpKeyObjects1, gdjs.Match03Code.GDUpKeyObjects3);

for (var i = 0, k = 0, l = gdjs.Match03Code.GDUpKeyObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDUpKeyObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDUpKeyObjects3[k] = gdjs.Match03Code.GDUpKeyObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDUpKeyObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDUpKeyObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDUpKeyObjects2_1final.indexOf(gdjs.Match03Code.GDUpKeyObjects3[j]) === -1 )
            gdjs.Match03Code.GDUpKeyObjects2_1final.push(gdjs.Match03Code.GDUpKeyObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDUpKeyObjects2_1final, gdjs.Match03Code.GDUpKeyObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(-(64));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{

/* Reuse gdjs.Match03Code.GDRightKeyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDRightKeyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDRightKeyObjects1, gdjs.Match03Code.GDRightKeyObjects2);

for (var i = 0, k = 0, l = gdjs.Match03Code.GDRightKeyObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRightKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDRightKeyObjects2[k] = gdjs.Match03Code.GDRightKeyObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDRightKeyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDRightKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDRightKeyObjects1_1final.indexOf(gdjs.Match03Code.GDRightKeyObjects2[j]) === -1 )
            gdjs.Match03Code.GDRightKeyObjects1_1final.push(gdjs.Match03Code.GDRightKeyObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDRightKeyObjects1_1final, gdjs.Match03Code.GDRightKeyObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(64);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}}

}


};gdjs.Match03Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.Match03Code.GDDownKeyObjects1.length = 0;

gdjs.Match03Code.GDLeftKeyObjects1.length = 0;

gdjs.Match03Code.GDRightKeyObjects1.length = 0;

gdjs.Match03Code.GDUpKeyObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDDownKeyObjects1_1final.length = 0;
gdjs.Match03Code.GDLeftKeyObjects1_1final.length = 0;
gdjs.Match03Code.GDRightKeyObjects1_1final.length = 0;
gdjs.Match03Code.GDUpKeyObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("DownKey"), gdjs.Match03Code.GDDownKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftKey"), gdjs.Match03Code.GDLeftKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightKey"), gdjs.Match03Code.GDRightKeyObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpKey"), gdjs.Match03Code.GDUpKeyObjects2);
for (var i = 0, k = 0, l = gdjs.Match03Code.GDUpKeyObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDUpKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDUpKeyObjects2[k] = gdjs.Match03Code.GDUpKeyObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDUpKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDRightKeyObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRightKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDRightKeyObjects2[k] = gdjs.Match03Code.GDRightKeyObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDRightKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDLeftKeyObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDLeftKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDLeftKeyObjects2[k] = gdjs.Match03Code.GDLeftKeyObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDLeftKeyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDDownKeyObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDDownKeyObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Match03Code.GDDownKeyObjects2[k] = gdjs.Match03Code.GDDownKeyObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDDownKeyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDDownKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDDownKeyObjects1_1final.indexOf(gdjs.Match03Code.GDDownKeyObjects2[j]) === -1 )
            gdjs.Match03Code.GDDownKeyObjects1_1final.push(gdjs.Match03Code.GDDownKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDLeftKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDLeftKeyObjects1_1final.indexOf(gdjs.Match03Code.GDLeftKeyObjects2[j]) === -1 )
            gdjs.Match03Code.GDLeftKeyObjects1_1final.push(gdjs.Match03Code.GDLeftKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDRightKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDRightKeyObjects1_1final.indexOf(gdjs.Match03Code.GDRightKeyObjects2[j]) === -1 )
            gdjs.Match03Code.GDRightKeyObjects1_1final.push(gdjs.Match03Code.GDRightKeyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDUpKeyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDUpKeyObjects1_1final.indexOf(gdjs.Match03Code.GDUpKeyObjects2[j]) === -1 )
            gdjs.Match03Code.GDUpKeyObjects1_1final.push(gdjs.Match03Code.GDUpKeyObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDDownKeyObjects1_1final, gdjs.Match03Code.GDDownKeyObjects1);
gdjs.copyArray(gdjs.Match03Code.GDLeftKeyObjects1_1final, gdjs.Match03Code.GDLeftKeyObjects1);
gdjs.copyArray(gdjs.Match03Code.GDRightKeyObjects1_1final, gdjs.Match03Code.GDRightKeyObjects1);
gdjs.copyArray(gdjs.Match03Code.GDUpKeyObjects1_1final, gdjs.Match03Code.GDUpKeyObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11766108);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{ //Subevents
gdjs.Match03Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Match03Code.GDMarkerObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.Match03Code.GDMarkerObjects3});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects3ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects3ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects3Objects = Hashtable.newFrom({"Box": gdjs.Match03Code.GDBoxObjects3, "Player": gdjs.Match03Code.GDPlayerObjects3, "BlueBox": gdjs.Match03Code.GDBlueBoxObjects3, "RedBox": gdjs.Match03Code.GDRedBoxObjects3, "BoxAbu": gdjs.Match03Code.GDBoxAbuObjects3, "BoxHijau": gdjs.Match03Code.GDBoxHijauObjects3});
gdjs.Match03Code.eventsList3 = function(runtimeScene) {

};gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.Match03Code.GDMarkerObjects3});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDTilemap_95959595ObstaclesObjects3Objects = Hashtable.newFrom({"Tilemap_Obstacles": gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects = Hashtable.newFrom({"Marker": gdjs.Match03Code.GDMarkerObjects3});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueGoalObjects3ObjectsGDgdjs_9546Match03Code_9546GDRedGoalObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalCoklatObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalAbuObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalHijauObjects3Objects = Hashtable.newFrom({"BlueGoal": gdjs.Match03Code.GDBlueGoalObjects3, "RedGoal": gdjs.Match03Code.GDRedGoalObjects3, "GoalCoklat": gdjs.Match03Code.GDGoalCoklatObjects3, "GoalAbu": gdjs.Match03Code.GDGoalAbuObjects3, "GoalHijau": gdjs.Match03Code.GDGoalHijauObjects3});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects = Hashtable.newFrom({"Box": gdjs.Match03Code.GDBoxObjects2, "Player": gdjs.Match03Code.GDPlayerObjects2, "BlueBox": gdjs.Match03Code.GDBlueBoxObjects2, "RedBox": gdjs.Match03Code.GDRedBoxObjects2, "BoxAbu": gdjs.Match03Code.GDBoxAbuObjects2, "BoxHijau": gdjs.Match03Code.GDBoxHijauObjects2});
gdjs.Match03Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueBox"), gdjs.Match03Code.GDBlueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Match03Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoxAbu"), gdjs.Match03Code.GDBoxAbuObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoxHijau"), gdjs.Match03Code.GDBoxHijauObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Match03Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.Match03Code.GDRedBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBlueBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxAbuObjects2 */
/* Reuse gdjs.Match03Code.GDBoxHijauObjects2 */
/* Reuse gdjs.Match03Code.GDPlayerObjects2 */
/* Reuse gdjs.Match03Code.GDRedBoxObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxObjects2[i].returnVariable(gdjs.Match03Code.GDBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDPlayerObjects2[i].returnVariable(gdjs.Match03Code.GDPlayerObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBlueBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueBoxObjects2[i].returnVariable(gdjs.Match03Code.GDBlueBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDRedBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDRedBoxObjects2[i].returnVariable(gdjs.Match03Code.GDRedBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxAbuObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxAbuObjects2[i].returnVariable(gdjs.Match03Code.GDBoxAbuObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxHijauObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxHijauObjects2[i].returnVariable(gdjs.Match03Code.GDBoxHijauObjects2[i].getVariables().get("Direction")).setString("None");
}
}}

}


};gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Match03Code.GDMarkerObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects = Hashtable.newFrom({"Box": gdjs.Match03Code.GDBoxObjects2, "Player": gdjs.Match03Code.GDPlayerObjects2, "BlueBox": gdjs.Match03Code.GDBlueBoxObjects2, "RedBox": gdjs.Match03Code.GDRedBoxObjects2, "BoxAbu": gdjs.Match03Code.GDBoxAbuObjects2, "BoxHijau": gdjs.Match03Code.GDBoxHijauObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects = Hashtable.newFrom({"Box": gdjs.Match03Code.GDBoxObjects2, "Player": gdjs.Match03Code.GDPlayerObjects2, "BlueBox": gdjs.Match03Code.GDBlueBoxObjects2, "RedBox": gdjs.Match03Code.GDRedBoxObjects2, "BoxAbu": gdjs.Match03Code.GDBoxAbuObjects2, "BoxHijau": gdjs.Match03Code.GDBoxHijauObjects2});
gdjs.Match03Code.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Match03Code.GDBlueBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxAbuObjects2 */
/* Reuse gdjs.Match03Code.GDBoxHijauObjects2 */
/* Reuse gdjs.Match03Code.GDPlayerObjects2 */
/* Reuse gdjs.Match03Code.GDRedBoxObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBoxObjects2[i].getVariableString(gdjs.Match03Code.GDBoxObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBoxObjects2[k] = gdjs.Match03Code.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDBoxObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDPlayerObjects2[i].getVariableString(gdjs.Match03Code.GDPlayerObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDPlayerObjects2[k] = gdjs.Match03Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDPlayerObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBlueBoxObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBlueBoxObjects2[i].getVariableString(gdjs.Match03Code.GDBlueBoxObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBlueBoxObjects2[k] = gdjs.Match03Code.GDBlueBoxObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDBlueBoxObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDRedBoxObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRedBoxObjects2[i].getVariableString(gdjs.Match03Code.GDRedBoxObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDRedBoxObjects2[k] = gdjs.Match03Code.GDRedBoxObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDRedBoxObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBoxAbuObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBoxAbuObjects2[i].getVariableString(gdjs.Match03Code.GDBoxAbuObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBoxAbuObjects2[k] = gdjs.Match03Code.GDBoxAbuObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDBoxAbuObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBoxHijauObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBoxHijauObjects2[i].getVariableString(gdjs.Match03Code.GDBoxHijauObjects2[i].getVariables().get("Direction")) == "Move" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBoxHijauObjects2[k] = gdjs.Match03Code.GDBoxHijauObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDBoxHijauObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBlueBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBoxAbuObjects2 */
/* Reuse gdjs.Match03Code.GDBoxHijauObjects2 */
/* Reuse gdjs.Match03Code.GDPlayerObjects2 */
/* Reuse gdjs.Match03Code.GDRedBoxObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxObjects2[i].setPosition((gdjs.Match03Code.GDBoxObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDBoxObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.Match03Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDPlayerObjects2[i].setPosition((gdjs.Match03Code.GDPlayerObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDPlayerObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.Match03Code.GDBlueBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueBoxObjects2[i].setPosition((gdjs.Match03Code.GDBlueBoxObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDBlueBoxObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.Match03Code.GDRedBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDRedBoxObjects2[i].setPosition((gdjs.Match03Code.GDRedBoxObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDRedBoxObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.Match03Code.GDBoxAbuObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxAbuObjects2[i].setPosition((gdjs.Match03Code.GDBoxAbuObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDBoxAbuObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
for(var i = 0, len = gdjs.Match03Code.GDBoxHijauObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxHijauObjects2[i].setPosition((gdjs.Match03Code.GDBoxHijauObjects2[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(gdjs.Match03Code.GDBoxHijauObjects2[i].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Match03Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxObjects2[i].returnVariable(gdjs.Match03Code.GDBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDPlayerObjects2[i].returnVariable(gdjs.Match03Code.GDPlayerObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBlueBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueBoxObjects2[i].returnVariable(gdjs.Match03Code.GDBlueBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDRedBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDRedBoxObjects2[i].returnVariable(gdjs.Match03Code.GDRedBoxObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxAbuObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxAbuObjects2[i].returnVariable(gdjs.Match03Code.GDBoxAbuObjects2[i].getVariables().get("Direction")).setString("None");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxHijauObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxHijauObjects2[i].returnVariable(gdjs.Match03Code.GDBoxHijauObjects2[i].getVariables().get("Direction")).setString("None");
}
}}

}


};gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueBoxObjects2Objects = Hashtable.newFrom({"BlueBox": gdjs.Match03Code.GDBlueBoxObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueGoalObjects2Objects = Hashtable.newFrom({"BlueGoal": gdjs.Match03Code.GDBlueGoalObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDRedBoxObjects2Objects = Hashtable.newFrom({"RedBox": gdjs.Match03Code.GDRedBoxObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDRedGoalObjects2Objects = Hashtable.newFrom({"RedGoal": gdjs.Match03Code.GDRedGoalObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.Match03Code.GDBoxObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalCoklatObjects2Objects = Hashtable.newFrom({"GoalCoklat": gdjs.Match03Code.GDGoalCoklatObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxAbuObjects2Objects = Hashtable.newFrom({"BoxAbu": gdjs.Match03Code.GDBoxAbuObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalAbuObjects2Objects = Hashtable.newFrom({"GoalAbu": gdjs.Match03Code.GDGoalAbuObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects = Hashtable.newFrom({"BoxHijau": gdjs.Match03Code.GDBoxHijauObjects2});
gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalHijauObjects2Objects = Hashtable.newFrom({"GoalHijau": gdjs.Match03Code.GDGoalHijauObjects2});
gdjs.Match03Code.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Match03Code.GDPlayerObjects2);
gdjs.Match03Code.GDMarkerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects2Objects, (( gdjs.Match03Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Match03Code.GDPlayerObjects2[0].getPointX("")), (( gdjs.Match03Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Match03Code.GDPlayerObjects2[0].getPointY("")), "");
}}

}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("BlueBox"), gdjs.Match03Code.GDBlueBoxObjects3);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Match03Code.GDBoxObjects3);
gdjs.copyArray(runtimeScene.getObjects("BoxAbu"), gdjs.Match03Code.GDBoxAbuObjects3);
gdjs.copyArray(runtimeScene.getObjects("BoxHijau"), gdjs.Match03Code.GDBoxHijauObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Match03Code.GDMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Match03Code.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.Match03Code.GDRedBoxObjects3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects3ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects3ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects3ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Match03Code.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxObjects3[i].returnVariable(gdjs.Match03Code.GDBoxObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.Match03Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDPlayerObjects3[i].returnVariable(gdjs.Match03Code.GDPlayerObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.Match03Code.GDBlueBoxObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueBoxObjects3[i].returnVariable(gdjs.Match03Code.GDBlueBoxObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.Match03Code.GDRedBoxObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDRedBoxObjects3[i].returnVariable(gdjs.Match03Code.GDRedBoxObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxAbuObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxAbuObjects3[i].returnVariable(gdjs.Match03Code.GDBoxAbuObjects3[i].getVariables().get("Direction")).setString("Move");
}
for(var i = 0, len = gdjs.Match03Code.GDBoxHijauObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxHijauObjects3[i].returnVariable(gdjs.Match03Code.GDBoxHijauObjects3[i].getVariables().get("Direction")).setString("Move");
}
}{for(var i = 0, len = gdjs.Match03Code.GDMarkerObjects3.length ;i < len;++i) {
    gdjs.Match03Code.GDMarkerObjects3[i].setPosition((( gdjs.Match03Code.GDBoxHijauObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBoxAbuObjects3.length === 0 ) ? (( gdjs.Match03Code.GDRedBoxObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBlueBoxObjects3.length === 0 ) ? (( gdjs.Match03Code.GDPlayerObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBoxObjects3.length === 0 ) ? 0 :gdjs.Match03Code.GDBoxObjects3[0].getPointX("")) :gdjs.Match03Code.GDPlayerObjects3[0].getPointX("")) :gdjs.Match03Code.GDBlueBoxObjects3[0].getPointX("")) :gdjs.Match03Code.GDRedBoxObjects3[0].getPointX("")) :gdjs.Match03Code.GDBoxAbuObjects3[0].getPointX("")) :gdjs.Match03Code.GDBoxHijauObjects3[0].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)),(( gdjs.Match03Code.GDBoxHijauObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBoxAbuObjects3.length === 0 ) ? (( gdjs.Match03Code.GDRedBoxObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBlueBoxObjects3.length === 0 ) ? (( gdjs.Match03Code.GDPlayerObjects3.length === 0 ) ? (( gdjs.Match03Code.GDBoxObjects3.length === 0 ) ? 0 :gdjs.Match03Code.GDBoxObjects3[0].getPointY("")) :gdjs.Match03Code.GDPlayerObjects3[0].getPointY("")) :gdjs.Match03Code.GDBlueBoxObjects3[0].getPointY("")) :gdjs.Match03Code.GDRedBoxObjects3[0].getPointY("")) :gdjs.Match03Code.GDBoxAbuObjects3[0].getPointY("")) :gdjs.Match03Code.GDBoxHijauObjects3[0].getPointY("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
{ //Subevents: 
gdjs.Match03Code.eventsList3(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{

gdjs.Match03Code.GDBlueGoalObjects2.length = 0;

gdjs.Match03Code.GDGoalAbuObjects2.length = 0;

gdjs.Match03Code.GDGoalCoklatObjects2.length = 0;

gdjs.Match03Code.GDGoalHijauObjects2.length = 0;

gdjs.Match03Code.GDMarkerObjects2.length = 0;

gdjs.Match03Code.GDRedGoalObjects2.length = 0;

gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Match03Code.GDBlueGoalObjects2_1final.length = 0;
gdjs.Match03Code.GDGoalAbuObjects2_1final.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects2_1final.length = 0;
gdjs.Match03Code.GDGoalHijauObjects2_1final.length = 0;
gdjs.Match03Code.GDMarkerObjects2_1final.length = 0;
gdjs.Match03Code.GDRedGoalObjects2_1final.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Match03Code.GDMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Tilemap_Obstacles"), gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDTilemap_95959595ObstaclesObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDMarkerObjects2_1final.indexOf(gdjs.Match03Code.GDMarkerObjects3[j]) === -1 )
            gdjs.Match03Code.GDMarkerObjects2_1final.push(gdjs.Match03Code.GDMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2_1final.indexOf(gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3[j]) === -1 )
            gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2_1final.push(gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BlueGoal"), gdjs.Match03Code.GDBlueGoalObjects3);
gdjs.copyArray(runtimeScene.getObjects("GoalAbu"), gdjs.Match03Code.GDGoalAbuObjects3);
gdjs.copyArray(runtimeScene.getObjects("GoalCoklat"), gdjs.Match03Code.GDGoalCoklatObjects3);
gdjs.copyArray(runtimeScene.getObjects("GoalHijau"), gdjs.Match03Code.GDGoalHijauObjects3);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Match03Code.GDMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("RedGoal"), gdjs.Match03Code.GDRedGoalObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects3Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueGoalObjects3ObjectsGDgdjs_9546Match03Code_9546GDRedGoalObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalCoklatObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalAbuObjects3ObjectsGDgdjs_9546Match03Code_9546GDGoalHijauObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBlueGoalObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBlueGoalObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.Match03Code.GDBlueGoalObjects3[k] = gdjs.Match03Code.GDBlueGoalObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDBlueGoalObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDRedGoalObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRedGoalObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.Match03Code.GDRedGoalObjects3[k] = gdjs.Match03Code.GDRedGoalObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDRedGoalObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalCoklatObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalCoklatObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.Match03Code.GDGoalCoklatObjects3[k] = gdjs.Match03Code.GDGoalCoklatObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalCoklatObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalAbuObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalAbuObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.Match03Code.GDGoalAbuObjects3[k] = gdjs.Match03Code.GDGoalAbuObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalAbuObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalHijauObjects3.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalHijauObjects3[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_2 = true;
        gdjs.Match03Code.GDGoalHijauObjects3[k] = gdjs.Match03Code.GDGoalHijauObjects3[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalHijauObjects3.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Match03Code.GDBlueGoalObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDBlueGoalObjects2_1final.indexOf(gdjs.Match03Code.GDBlueGoalObjects3[j]) === -1 )
            gdjs.Match03Code.GDBlueGoalObjects2_1final.push(gdjs.Match03Code.GDBlueGoalObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDGoalAbuObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDGoalAbuObjects2_1final.indexOf(gdjs.Match03Code.GDGoalAbuObjects3[j]) === -1 )
            gdjs.Match03Code.GDGoalAbuObjects2_1final.push(gdjs.Match03Code.GDGoalAbuObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDGoalCoklatObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDGoalCoklatObjects2_1final.indexOf(gdjs.Match03Code.GDGoalCoklatObjects3[j]) === -1 )
            gdjs.Match03Code.GDGoalCoklatObjects2_1final.push(gdjs.Match03Code.GDGoalCoklatObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDGoalHijauObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDGoalHijauObjects2_1final.indexOf(gdjs.Match03Code.GDGoalHijauObjects3[j]) === -1 )
            gdjs.Match03Code.GDGoalHijauObjects2_1final.push(gdjs.Match03Code.GDGoalHijauObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDMarkerObjects2_1final.indexOf(gdjs.Match03Code.GDMarkerObjects3[j]) === -1 )
            gdjs.Match03Code.GDMarkerObjects2_1final.push(gdjs.Match03Code.GDMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Match03Code.GDRedGoalObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Match03Code.GDRedGoalObjects2_1final.indexOf(gdjs.Match03Code.GDRedGoalObjects3[j]) === -1 )
            gdjs.Match03Code.GDRedGoalObjects2_1final.push(gdjs.Match03Code.GDRedGoalObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Match03Code.GDBlueGoalObjects2_1final, gdjs.Match03Code.GDBlueGoalObjects2);
gdjs.copyArray(gdjs.Match03Code.GDGoalAbuObjects2_1final, gdjs.Match03Code.GDGoalAbuObjects2);
gdjs.copyArray(gdjs.Match03Code.GDGoalCoklatObjects2_1final, gdjs.Match03Code.GDGoalCoklatObjects2);
gdjs.copyArray(gdjs.Match03Code.GDGoalHijauObjects2_1final, gdjs.Match03Code.GDGoalHijauObjects2);
gdjs.copyArray(gdjs.Match03Code.GDMarkerObjects2_1final, gdjs.Match03Code.GDMarkerObjects2);
gdjs.copyArray(gdjs.Match03Code.GDRedGoalObjects2_1final, gdjs.Match03Code.GDRedGoalObjects2);
gdjs.copyArray(gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2_1final, gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Match03Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBox"), gdjs.Match03Code.GDBlueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Match03Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoxAbu"), gdjs.Match03Code.GDBoxAbuObjects2);
gdjs.copyArray(runtimeScene.getObjects("BoxHijau"), gdjs.Match03Code.GDBoxHijauObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Match03Code.GDMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Match03Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.Match03Code.GDRedBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDMarkerObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDPlayerObjects2ObjectsGDgdjs_9546Match03Code_9546GDBlueBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDRedBoxObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxAbuObjects2ObjectsGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Match03Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBox"), gdjs.Match03Code.GDBlueBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("BlueGoal"), gdjs.Match03Code.GDBlueGoalObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueBoxObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBlueGoalObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBlueGoalObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBlueGoalObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBlueGoalObjects2[k] = gdjs.Match03Code.GDBlueGoalObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDBlueGoalObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBlueBoxObjects2 */
/* Reuse gdjs.Match03Code.GDBlueGoalObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBlueBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Match03Code.GDBlueGoalObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBlueGoalObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedBox"), gdjs.Match03Code.GDRedBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("RedGoal"), gdjs.Match03Code.GDRedGoalObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDRedBoxObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDRedGoalObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDRedGoalObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRedGoalObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDRedGoalObjects2[k] = gdjs.Match03Code.GDRedGoalObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDRedGoalObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDRedBoxObjects2 */
/* Reuse gdjs.Match03Code.GDRedGoalObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDRedBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDRedBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Match03Code.GDRedGoalObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDRedGoalObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Match03Code.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoalCoklat"), gdjs.Match03Code.GDGoalCoklatObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalCoklatObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalCoklatObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalCoklatObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalCoklatObjects2[k] = gdjs.Match03Code.GDGoalCoklatObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalCoklatObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBoxObjects2 */
/* Reuse gdjs.Match03Code.GDGoalCoklatObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Match03Code.GDGoalCoklatObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDGoalCoklatObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BoxAbu"), gdjs.Match03Code.GDBoxAbuObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoalAbu"), gdjs.Match03Code.GDGoalAbuObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxAbuObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalAbuObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalAbuObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalAbuObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalAbuObjects2[k] = gdjs.Match03Code.GDGoalAbuObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalAbuObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBoxAbuObjects2 */
/* Reuse gdjs.Match03Code.GDGoalAbuObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBoxAbuObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxAbuObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Match03Code.GDGoalAbuObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDGoalAbuObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BoxHijau"), gdjs.Match03Code.GDBoxHijauObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoalHijau"), gdjs.Match03Code.GDGoalHijauObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDBoxHijauObjects2Objects, gdjs.Match03Code.mapOfGDgdjs_9546Match03Code_9546GDGoalHijauObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalHijauObjects2.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalHijauObjects2[i].getBehavior("Animation").getAnimationName() == "Empty" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalHijauObjects2[k] = gdjs.Match03Code.GDGoalHijauObjects2[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalHijauObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Match03Code.GDBoxHijauObjects2 */
/* Reuse gdjs.Match03Code.GDGoalHijauObjects2 */
{for(var i = 0, len = gdjs.Match03Code.GDBoxHijauObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDBoxHijauObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Match03Code.GDGoalHijauObjects2.length ;i < len;++i) {
    gdjs.Match03Code.GDGoalHijauObjects2[i].getBehavior("Animation").setAnimationName("Filled");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Match03Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("ResetGameButton"), gdjs.Match03Code.GDResetGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDResetGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDResetGameButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDResetGameButtonObjects1[k] = gdjs.Match03Code.GDResetGameButtonObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDResetGameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Match03Code.mapOfEmptyGDGoalObjects = Hashtable.newFrom({"Goal": []});
gdjs.Match03Code.mapOfEmptyGDGoalObjects = Hashtable.newFrom({"Goal": []});
gdjs.Match03Code.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlueGoal"), gdjs.Match03Code.GDBlueGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoalAbu"), gdjs.Match03Code.GDGoalAbuObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoalCoklat"), gdjs.Match03Code.GDGoalCoklatObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoalHijau"), gdjs.Match03Code.GDGoalHijauObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedGoal"), gdjs.Match03Code.GDRedGoalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "WinGame"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDBlueGoalObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDBlueGoalObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDBlueGoalObjects1[k] = gdjs.Match03Code.GDBlueGoalObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDBlueGoalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDRedGoalObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDRedGoalObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDRedGoalObjects1[k] = gdjs.Match03Code.GDRedGoalObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDRedGoalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalAbuObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalAbuObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalAbuObjects1[k] = gdjs.Match03Code.GDGoalAbuObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalAbuObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalHijauObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalHijauObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalHijauObjects1[k] = gdjs.Match03Code.GDGoalHijauObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalHijauObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Match03Code.GDGoalCoklatObjects1.length;i<l;++i) {
    if ( gdjs.Match03Code.GDGoalCoklatObjects1[i].getBehavior("Animation").getAnimationName() == "Filled" ) {
        isConditionTrue_0 = true;
        gdjs.Match03Code.GDGoalCoklatObjects1[k] = gdjs.Match03Code.GDGoalCoklatObjects1[i];
        ++k;
    }
}
gdjs.Match03Code.GDGoalCoklatObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Match03Code.mapOfEmptyGDGoalObjects) == gdjs.evtTools.object.getPickedInstancesCount(gdjs.Match03Code.mapOfEmptyGDGoalObjects));
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}}

}


};gdjs.Match03Code.eventsList9 = function(runtimeScene) {

};gdjs.Match03Code.eventsList10 = function(runtimeScene) {

{


gdjs.Match03Code.eventsList0(runtimeScene);
}


{


gdjs.Match03Code.eventsList2(runtimeScene);
}


{


gdjs.Match03Code.eventsList6(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.Match03Code.eventsList7(runtimeScene);
}


{


gdjs.Match03Code.eventsList8(runtimeScene);
}


{


gdjs.Match03Code.eventsList9(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Match03Code.GDTimerObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{for(var i = 0, len = gdjs.Match03Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDTimerObjects1[i].resetTimer("Timer");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "funny-bgm-240794.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Match03Code.GDTimerObjects1);
{for(var i = 0, len = gdjs.Match03Code.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Match03Code.GDTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer") - 80))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") > 80;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}}

}


};

gdjs.Match03Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Match03Code.GDPlayerObjects1.length = 0;
gdjs.Match03Code.GDPlayerObjects2.length = 0;
gdjs.Match03Code.GDPlayerObjects3.length = 0;
gdjs.Match03Code.GDBoxObjects1.length = 0;
gdjs.Match03Code.GDBoxObjects2.length = 0;
gdjs.Match03Code.GDBoxObjects3.length = 0;
gdjs.Match03Code.GDMarkerObjects1.length = 0;
gdjs.Match03Code.GDMarkerObjects2.length = 0;
gdjs.Match03Code.GDMarkerObjects3.length = 0;
gdjs.Match03Code.GDFloorObjects1.length = 0;
gdjs.Match03Code.GDFloorObjects2.length = 0;
gdjs.Match03Code.GDFloorObjects3.length = 0;
gdjs.Match03Code.GDGoalObjects1.length = 0;
gdjs.Match03Code.GDGoalObjects2.length = 0;
gdjs.Match03Code.GDGoalObjects3.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects1.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects2.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects3.length = 0;
gdjs.Match03Code.GDYouWinObjects1.length = 0;
gdjs.Match03Code.GDYouWinObjects2.length = 0;
gdjs.Match03Code.GDYouWinObjects3.length = 0;
gdjs.Match03Code.GDUpKeyObjects1.length = 0;
gdjs.Match03Code.GDUpKeyObjects2.length = 0;
gdjs.Match03Code.GDUpKeyObjects3.length = 0;
gdjs.Match03Code.GDRightKeyObjects1.length = 0;
gdjs.Match03Code.GDRightKeyObjects2.length = 0;
gdjs.Match03Code.GDRightKeyObjects3.length = 0;
gdjs.Match03Code.GDLeftKeyObjects1.length = 0;
gdjs.Match03Code.GDLeftKeyObjects2.length = 0;
gdjs.Match03Code.GDLeftKeyObjects3.length = 0;
gdjs.Match03Code.GDDownKeyObjects1.length = 0;
gdjs.Match03Code.GDDownKeyObjects2.length = 0;
gdjs.Match03Code.GDDownKeyObjects3.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects1.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3.length = 0;
gdjs.Match03Code.GDTimerObjects1.length = 0;
gdjs.Match03Code.GDTimerObjects2.length = 0;
gdjs.Match03Code.GDTimerObjects3.length = 0;
gdjs.Match03Code.GDNewSpriteObjects1.length = 0;
gdjs.Match03Code.GDNewSpriteObjects2.length = 0;
gdjs.Match03Code.GDNewSpriteObjects3.length = 0;
gdjs.Match03Code.GDRedBoxObjects1.length = 0;
gdjs.Match03Code.GDRedBoxObjects2.length = 0;
gdjs.Match03Code.GDRedBoxObjects3.length = 0;
gdjs.Match03Code.GDBlueBoxObjects1.length = 0;
gdjs.Match03Code.GDBlueBoxObjects2.length = 0;
gdjs.Match03Code.GDBlueBoxObjects3.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects1.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects2.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects3.length = 0;
gdjs.Match03Code.GDBlueGoalObjects1.length = 0;
gdjs.Match03Code.GDBlueGoalObjects2.length = 0;
gdjs.Match03Code.GDBlueGoalObjects3.length = 0;
gdjs.Match03Code.GDRedGoalObjects1.length = 0;
gdjs.Match03Code.GDRedGoalObjects2.length = 0;
gdjs.Match03Code.GDRedGoalObjects3.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects1.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects2.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects3.length = 0;
gdjs.Match03Code.GDSandObjects1.length = 0;
gdjs.Match03Code.GDSandObjects2.length = 0;
gdjs.Match03Code.GDSandObjects3.length = 0;
gdjs.Match03Code.GDBoxAbuObjects1.length = 0;
gdjs.Match03Code.GDBoxAbuObjects2.length = 0;
gdjs.Match03Code.GDBoxAbuObjects3.length = 0;
gdjs.Match03Code.GDGoalAbuObjects1.length = 0;
gdjs.Match03Code.GDGoalAbuObjects2.length = 0;
gdjs.Match03Code.GDGoalAbuObjects3.length = 0;
gdjs.Match03Code.GDBoxHijauObjects1.length = 0;
gdjs.Match03Code.GDBoxHijauObjects2.length = 0;
gdjs.Match03Code.GDBoxHijauObjects3.length = 0;
gdjs.Match03Code.GDGoalHijauObjects1.length = 0;
gdjs.Match03Code.GDGoalHijauObjects2.length = 0;
gdjs.Match03Code.GDGoalHijauObjects3.length = 0;

gdjs.Match03Code.eventsList10(runtimeScene);
gdjs.Match03Code.GDPlayerObjects1.length = 0;
gdjs.Match03Code.GDPlayerObjects2.length = 0;
gdjs.Match03Code.GDPlayerObjects3.length = 0;
gdjs.Match03Code.GDBoxObjects1.length = 0;
gdjs.Match03Code.GDBoxObjects2.length = 0;
gdjs.Match03Code.GDBoxObjects3.length = 0;
gdjs.Match03Code.GDMarkerObjects1.length = 0;
gdjs.Match03Code.GDMarkerObjects2.length = 0;
gdjs.Match03Code.GDMarkerObjects3.length = 0;
gdjs.Match03Code.GDFloorObjects1.length = 0;
gdjs.Match03Code.GDFloorObjects2.length = 0;
gdjs.Match03Code.GDFloorObjects3.length = 0;
gdjs.Match03Code.GDGoalObjects1.length = 0;
gdjs.Match03Code.GDGoalObjects2.length = 0;
gdjs.Match03Code.GDGoalObjects3.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects1.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects2.length = 0;
gdjs.Match03Code.GDResetGameButtonObjects3.length = 0;
gdjs.Match03Code.GDYouWinObjects1.length = 0;
gdjs.Match03Code.GDYouWinObjects2.length = 0;
gdjs.Match03Code.GDYouWinObjects3.length = 0;
gdjs.Match03Code.GDUpKeyObjects1.length = 0;
gdjs.Match03Code.GDUpKeyObjects2.length = 0;
gdjs.Match03Code.GDUpKeyObjects3.length = 0;
gdjs.Match03Code.GDRightKeyObjects1.length = 0;
gdjs.Match03Code.GDRightKeyObjects2.length = 0;
gdjs.Match03Code.GDRightKeyObjects3.length = 0;
gdjs.Match03Code.GDLeftKeyObjects1.length = 0;
gdjs.Match03Code.GDLeftKeyObjects2.length = 0;
gdjs.Match03Code.GDLeftKeyObjects3.length = 0;
gdjs.Match03Code.GDDownKeyObjects1.length = 0;
gdjs.Match03Code.GDDownKeyObjects2.length = 0;
gdjs.Match03Code.GDDownKeyObjects3.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects1.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects2.length = 0;
gdjs.Match03Code.GDTilemap_9595ObstaclesObjects3.length = 0;
gdjs.Match03Code.GDTimerObjects1.length = 0;
gdjs.Match03Code.GDTimerObjects2.length = 0;
gdjs.Match03Code.GDTimerObjects3.length = 0;
gdjs.Match03Code.GDNewSpriteObjects1.length = 0;
gdjs.Match03Code.GDNewSpriteObjects2.length = 0;
gdjs.Match03Code.GDNewSpriteObjects3.length = 0;
gdjs.Match03Code.GDRedBoxObjects1.length = 0;
gdjs.Match03Code.GDRedBoxObjects2.length = 0;
gdjs.Match03Code.GDRedBoxObjects3.length = 0;
gdjs.Match03Code.GDBlueBoxObjects1.length = 0;
gdjs.Match03Code.GDBlueBoxObjects2.length = 0;
gdjs.Match03Code.GDBlueBoxObjects3.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects1.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects2.length = 0;
gdjs.Match03Code.GDOrangeLeavesObjects3.length = 0;
gdjs.Match03Code.GDBlueGoalObjects1.length = 0;
gdjs.Match03Code.GDBlueGoalObjects2.length = 0;
gdjs.Match03Code.GDBlueGoalObjects3.length = 0;
gdjs.Match03Code.GDRedGoalObjects1.length = 0;
gdjs.Match03Code.GDRedGoalObjects2.length = 0;
gdjs.Match03Code.GDRedGoalObjects3.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects1.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects2.length = 0;
gdjs.Match03Code.GDGoalCoklatObjects3.length = 0;
gdjs.Match03Code.GDSandObjects1.length = 0;
gdjs.Match03Code.GDSandObjects2.length = 0;
gdjs.Match03Code.GDSandObjects3.length = 0;
gdjs.Match03Code.GDBoxAbuObjects1.length = 0;
gdjs.Match03Code.GDBoxAbuObjects2.length = 0;
gdjs.Match03Code.GDBoxAbuObjects3.length = 0;
gdjs.Match03Code.GDGoalAbuObjects1.length = 0;
gdjs.Match03Code.GDGoalAbuObjects2.length = 0;
gdjs.Match03Code.GDGoalAbuObjects3.length = 0;
gdjs.Match03Code.GDBoxHijauObjects1.length = 0;
gdjs.Match03Code.GDBoxHijauObjects2.length = 0;
gdjs.Match03Code.GDBoxHijauObjects3.length = 0;
gdjs.Match03Code.GDGoalHijauObjects1.length = 0;
gdjs.Match03Code.GDGoalHijauObjects2.length = 0;
gdjs.Match03Code.GDGoalHijauObjects3.length = 0;


return;

}

gdjs['Match03Code'] = gdjs.Match03Code;
