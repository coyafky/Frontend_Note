 let name1 :string ="coya";
 console.log(name1);
 
 let age :number = 18;
 console.log(age);

 
 let isdone :boolean = true;
 console.log(isdone);
 
 let list :number[] = [1,2,3];
 console.log(list);
 
 let list2:Array<number> = [1,2,3];
 console.log(list2);
 
 let x :[string,number] = ["hello",10];
 console.log(x);
 enum Color {Red,Green,Blue}
 let c :Color = Color.Blue;
 console.log(c)
 
 let notSure :any = 4;
 notSure = "maybe a string instead";
 notSure = false;
 console.log(notSure);
