/* Complete the function in the editor below by returning a RegExp object, 
re, that matches any string  satisfying both of the following conditions:
  * String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
  * The remainder of string  (i.e., the rest of the string after the prefix) 
    consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]). */

function regexVar() {
  var re = (/^(Mr|Mrs|Ms|Dr|er)(\.)([a-zA-Z])+$/);
  
  return re;
}
