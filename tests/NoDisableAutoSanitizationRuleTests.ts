/// <reference path="../typings/mocha.d.ts" />
/// <reference path="../typings/chai.d.ts" />

/* tslint:disable:quotemark */
import TestHelper = require('./TestHelper');

describe('noDisableAutoSanitizationRule', () : void => {

    it('should produce violation for execUnsafeLocalFunction', () : void => {
        var ruleName : string = 'no-disable-auto-sanitization';
        var script : string = 'var retVal = MSApp.execUnsafeLocalFunction(() => {});';
        TestHelper.assertViolations(
            ruleName,
            script,
            [
                {
                    "failure": "Forbidden call to execUnsafeLocalFunction",
                    "ruleName": "no-disable-auto-sanitization",
                    "name": "file.ts",
                    "endPosition": { "character": 52, "line": 0, "position": 52 },
                    "startPosition": { "character": 13, "line": 0, "position": 13
                    }
                }
            ]
        );
    });

    it('should produce violation for setInnerHTMLUnsafe', () : void => {
        var ruleName : string = 'no-disable-auto-sanitization';
        var script : string = 'WinJS.Utilities.setInnerHTMLUnsafe(element, text);';
        TestHelper.assertViolations(
            ruleName,
            script,
            [
                {
                    "failure": "Forbidden call to setInnerHTMLUnsafe",
                    "ruleName": "no-disable-auto-sanitization",
                    "name": "file.ts",
                    "endPosition": { "character": 49, "line": 0, "position": 49 },
                    "startPosition": { "character": 0, "line": 0, "position": 0 }
                }
            ]
        );
    });
});
/* tslint:enable:quotemark */
