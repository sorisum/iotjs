/* Copyright 2019-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var assert = require('assert');

var test_general = require('./build/Release/test_napi_general.node');

assert.strictEqual(test_general.GetUndefined(), undefined);
assert.strictEqual(test_general.GetNull(), null);

[
  123,
  'test string',
  function() {},
  new Object(),
  true,
  undefined
].forEach(function(val) {
  assert.strictEqual(test_general.TypeOf(val), typeof val);
});
