let One = (a_func) => {
    console.log('one');
    a_func()
}
let Two = () => { console.log('two'); }

One(Two);
//Two();

