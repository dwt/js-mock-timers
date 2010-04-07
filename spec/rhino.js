
load('spec/lib/jspec.js')
load('lib/timers.js')

JSpec
.exec('spec/spec.core.js')
.run({ reporter: JSpec.reporters.Terminal })
.report()