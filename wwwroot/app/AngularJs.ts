/*
    Put utilities and types specific to angularJS in here, including decorators
*/
// this is used in $onChanges changesObj.<property>
// from: https://docs.angularjs.org/guide/component#!

export interface OnChangesPropertyType {
    currentValue: any;
    previousValue: any;
}


export interface ComponentController {
    $onInit(): void;
    // see the way they do typing for dictionaries/hashmaps here: http://stackoverflow.com/questions/15877362/declare-and-initialize-a-dictionary-in-typescript
    $onChanges(changeObj: { [propName: string]: OnChangesPropertyType }): void;
}