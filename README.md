

* Execution instructions:
- cd to folder
- npm start

* What I would do differently in a production environment:
testing
better to send unix timestamp instead of string timestamp
indication when to show button badge

* Parts not handled/not handled optimally on purpose and why:
create a custom component for graph and pie chart instead of using svgs
regular css styling instead of css objects
remove axcess code from boilerplate
the styles that zeplin shows are different than displayed
make ajax to get the json instead of hardcoded
error handling
translate
zeplin design is very bad in term sizes (box sizes, font sizes etc...)

* Solution thought process
basically not a difficult task at all.
but creating a project from zero including react, router, redux, saga in max 3 hours
is very hard.
I used react boilerplate to save time, and I guess some unnecesary junk from boilerplate still remains.
I don't believe that in 2019 we should still use libraries for grid, as css grid api is well supported.
I seperated some components view and login to different files. I believe more components should be seperated,
but I had time limitation.

also didn't put it in git to save me some time.