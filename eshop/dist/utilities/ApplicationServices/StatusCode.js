"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["REQUEST_SUCCESS"] = 200] = "REQUEST_SUCCESS";
    StatusCode[StatusCode["UnAuthorized"] = 401] = "UnAuthorized";
    StatusCode[StatusCode["UnAuthorizedAndShouldShowCaptcha"] = 601] = "UnAuthorizedAndShouldShowCaptcha";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=StatusCode.js.map