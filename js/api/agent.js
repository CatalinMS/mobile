'use strict';

import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

const requests = {
  del: url =>
    superagent
      .del(url)
      .then(function onResult(responseBody) {
        return responseBody;
      }, function onError(errorResponse) {
        throw {
          body: errorResponse.response.body,
          status: errorResponse.response.statusCode
        };
      }),

  get: (url, body = undefined) =>
    superagent
      .get(url)
      .query(body)
      .then(responseBody),

  put: (url, body) =>
    superagent
      .put(url, body)
      .then(function onResult(responseBody) {
        return responseBody;
      }, function onError(errorResponse) {
        throw {
          body: errorResponse.response.body,
          status: errorResponse.response.statusCode
        };
      }),

  post: (url, body) =>
    superagent
      .post(url, body)
      .set('Content-Type', 'application/json')
      .then(function onResult(responseBody) {
        return responseBody;
      }, function onError(errorResponse) {
        throw {
          body: errorResponse.response.body,
          status: errorResponse.response.statusCode
        };
      }),

  postWithQuery: (url, query, body) =>
    superagent
      .post(url, body)
      .query(query)
      .then(function onResult(responseBody) {
        return responseBody;
      }, function onError(errorResponse) {
        throw {
          body: errorResponse.response.body,
          status: errorResponse.response.statusCode
        };
      })
};

export default requests;
