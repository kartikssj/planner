/* global fetch */

export function fetchAction(type, url, request = {}) {
  return dispatch => {
    dispatch({
      type: type + '_START'
    });
    const config = {
      ...request,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };
    return fetch(url, config)
      .then((resp, err) => {
        if (err) {
          dispatch({
            type: type + '_ERROR',
            error: err
          })
        } else if (!resp.ok) {
          if (resp.status === 401) {
            dispatch({ type: 'UNAUTHORIZED' })
          }
          resp.json().then(parsed => {
            dispatch({
              type: type + '_ERROR',
              status: resp.status,
              error: parsed.error,
            })
          }).catch(_ => {
            dispatch({
              type: type + '_ERROR',
              status: resp.status,
              error: 'Invalid JSON!',
            })
          });
        } else {
          if (resp.status === 204) {
            dispatch({
              type: type + '_SUCCESS',
              response: '',
            })
          } else {
            resp.json().then(parsed => {
              dispatch({
                type: type + '_SUCCESS',
                response: parsed,
              })
            }).catch(err => {
              dispatch({
                type: type + '_ERROR',
                error: err,
              })

            })
          }
        }
      })
  }
}
