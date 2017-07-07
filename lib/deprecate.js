/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

/**
 * Warns users that an old object method is deprecated in favor of a new method
 * and aliases the old name to the new name.
 * @param {Object} obj The object containing the methods.
 * @param {string} base The base project/object to identify the method names.
 * @param {string} oldMethod The method to deprecate.
 * @param {string} newMethod The new method replacing the deprecated method.
 */
export default (obj, base, oldMethod, newMethod) => {
  /* eslint-disable no-console */
  console.warn(`In ${base}: ` +
      `${oldMethod} is deprecated, use ${newMethod} instead`);
  /* eslint-enable no-console */

  if (obj[oldMethod] && !obj[newMethod]) {
    obj[newMethod] = obj[oldMethod];
  }
};