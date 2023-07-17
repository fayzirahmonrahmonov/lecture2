# Lecture2
# Scope
- What is a scope in js ?

      The scope is the current context of execution in which values and expressions
      are "visible" or can be referenced. If a variable or expression is not in the current
      scope, it will not be available for use

- Kinds of Scopes:

  Global scope: The default scope for all code running in script mode.
  
  Block scope: This scope restricts the variable that is declared
              inside a specific block, from access by the outside of the block.
      
- What is Hoisting ?
  
        Hoisting is a JavaScript mechanism where variables and function
        declarations are moved to the top of their scope before code
        execution.
- What is Temporal Dead Zone ?

        A variable declared with let or const cannot be accessed until it is declared within its scope.

- What is Recurrion?

        Recursion is when a function calls itself until someone stops it. If no one stops it then it'll
        recurse (call itself) forever.
- What is Closure?

        A closure is the combination of a function bundled together which gives you
        access to an outer function's scope from an inner function
