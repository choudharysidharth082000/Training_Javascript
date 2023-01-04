//nested try catch in javascript
function nestedTryCatch() {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw new Error("inner error");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
}
nestedTryCatch();
//output