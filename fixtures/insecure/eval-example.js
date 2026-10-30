// INTENTIONALLY INSECURE TEST FIXTURE — never imported, never executed.
// It exists only so VibeShield's Semgrep rule `js-code-execution-eval` has something to detect.
function evaluateUserExpression(expression) {
  return eval(expression);
}

module.exports = { evaluateUserExpression };
