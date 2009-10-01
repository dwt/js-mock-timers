
# Mock Timers

JavaScript mock timer library for testing async functionality.

## Example

Timers return ids and may be passed to *clearInterval()*, however
they do not execute in threads, they must be manually scheduled and
controlled via the *tick()* function.

    setTimeout(function(){
      alert('Wahoo!')
    }, 400)
    
    tick(200) // Nothing happens
    tick(400) // Wahoo!
  
*setInterval()* works as expected, although it persists, where as *setTimeout()*
is destroyed after a single call. As conveyed by the last *tick()* call below,
a large increment in milliseconds may cause the callbacks to be called several times
to 'catch up'.

    progress = ''
    var id = setInterval(function(){
      progress += '.'
    }, 100)
    
    tick(50),  print(progress) // ''
    tick(50),  print(progress) // '.'
    tick(100), print(progress) // '..'
    tick(100), print(progress) // '...'
    tick(300), print(progress) // '......'
    
    clearInterval(id)
    
    tick(800) // Nothing happens
  
You may also reset at any time using *resetTimers()*

## License 

(The MIT License)

Copyright (c) 2009 TJ Holowaychuk <tj@vision-media.ca>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.