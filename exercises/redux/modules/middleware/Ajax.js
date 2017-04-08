const AJAX_ACTION_TYPE = Symbol('AJAX_ACTION_TYPE');

export function createAjaxAction(url, options) {
    return {
        type: AJAX_ACTION_TYPE,
        url: url,
        method: options.method || 'GET',
        body: options.body || null,
        pendingActionType: options.pendingActionType,
        successActionType: options.successActionType,
        failedActionType: options.failedActionType,
    };
}

const ajaxMiddleware = (store) => (next) => (action) => {
    if (action.type === AJAX_ACTION_TYPE) {
        // dispatch an action indicating that we are starting the fetch
        next({
            type: action.pendingActionType
        });

        let xhr = new XMLHttpRequest();
        xhr.open(action.method, action.url);
        xhr.send(action.body);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    next({
                        type: action.successActionType,
                        data: JSON.parse(xhr.responseText),
                    });
                } else {
                    next({
                        type: action.failedActionType,
                        error: xhr.responseText,
                    });
                }
            }
        };
    } else {
        // if it is not the action type we care about then continue it along
        next(action);
    }
};

export default ajaxMiddleware;