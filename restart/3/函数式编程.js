/*
函数式编程还是更广义编程范式的一部分: 声明式编程。 声明式编程是一种编程风格，采用该风格的应用程序代码有一个突出的特点，那就是对执行结果的描述远胜于执行过程。

命令式编程，关注的是达成目标的具体过程。
*/ 

/*
让字符串兼容URL格式。
一般来说，这可以通过连字符替换字符串中的所有空格实现，因为空格对URL地址的兼容性不佳。
*/ 

// 命令式

const string = 'This is the midday show with Cheryl Waters';
let urlFriendly = '';

for(var i = 0; i < string.length; i++){
    if(string[i] === ' '){
        urlFriendly += '-'
    } else {
        urlFriendly +=  string[i]
    }
}

// console.log(urlFriendly)


// 声明式
const string_shengming = 'This is the midday show with Cheryl Waters';
const urlFriendly_shengmingt = string_shengming.replace(/ /g, "-");
// console.log(urlFriendly)


/*
构建文档对象模型
*/ 

// 声明式

// const target = document.getElementById('target')
// const wrapper = document.createElement('div')
// const headline = document.createElement('h1')

// wrapper.id = "welcome"
// headline.innerText = 'Hello World'

// wrapper.appendChild(headline)
// target.appendChild(wrapper)


// React组件声明式风格构造一个DOM

// const {render} = ReactDom

// const Welcome = () => (
//     <div id="welcome">
//         <h1>Hello World</h1>
//     </div>
// )

// render(
//     <Welcome  />,
//     document.getElementById("target")
// )

/*
函数式编程的核心概念: 不可变性、纯函数、数据转换、高阶函数和递归
*/ 

// 不可变性: 不可修改元数据

let color_lawn = {
    title: 'lawn',
    color: '#00F00',
    rating: 0
}

function rateColor(color, rating){
    color.rating = rating
    return color
}

// console.log(rateColor(color_lawn,5).rating)
// console.log(color_lawn.rating)

let rateColorNochange = function(color, rating){
    return Object.assign({},color, {rating: rating})
}

// console.log(rateColorNochange(color_lawn,5).rating)
// console.log(color_lawn.rating)

let rateColorNochangeEs6 = (color, rating) => ({
    ...color,
    rating
})

// console.log(rateColorNochangeEs6(color_lawn,5).rating)
// console.log(color_lawn.rating)

let list = [
    {title: 'Rad Red'},
    {title: 'Lawn'},
    {title: 'Party Pink'}
]

let addColor = function(title,colors){
    colors.push(title)
    return colors
}

// console.log(addColor("Test Color",list).length)
// console.log(list.length)

// concat合并数组
const addColorNochange = (title, array) => array.concat({title})

// console.log(addColorNochange("Test Color",list).length)
// console.log(list.length)

// ES6语法

const addColorNochangeEs6 = (title,list) => [...list,{title}]

// console.log(addColorNochangeEs6("Test Color",list).length)
// console.log(list.length)

/*
纯函数是一个返回结果只依赖输入参数的函数。
纯函数至少需要接收一个参数并且总是返回一个值或者其他函数。
它们不会产生副作用、不修改全局变量，或者任何应用程序State.
它们将输入参数当作不可变数据。
*/ 

let frederick = {
    name: 'Frederick Douglass',
    canRead: false,
    canWrite: false
}


// 非纯函数
function selfEducate(){
    frederick.canRead = true
    frederick.canWrite = true
    return frederick
}

// selfEducate没有接收任何参数，没有返回一个值或者函数。
// 它修改了其他作用域的变量。

const selfEducate_No_chun = (person) => {
    person.canRead = true
    person.canWrite = true
    return person
} 

// console.log(selfEducate_chun(frederick))
// console.log(frederick)


// 纯函数
const selfEducate_chun = person => 
  ({
      ...person,
      canRead: true,
      canWrite: true
  })

//   console.log(selfEducate_chun(frederick))
//   console.log(frederick)


/*
数据转换，函数式编程是将一种数据转换成另外一种数据。
我们使用函数生成转换后的副本。
*/   


const schools = [
    'Yorktown',
    'Washington & Lee',
    'Wakefield'
]

// console.log(schools.join(' , '))

const wSchools = schools.filter(school => school[0] === 'W')
// console.log(wSchools)

const cutSchool = (cut, list) => 
  list.filter(school => school !== cut)

// console.log(cutSchool("Washington & Lee",schools).join(' * '))

// console.log(schools.join("\n"))

const hightSchools = schools.map(school => `${school} High School`)

// console.log(hightSchools.join('\n'))

// console.log(schools.join("\n"))

const hightSchools_name = schools.map(school => ({name: school}))

// console.log(hightSchools)

const editName = (oldName, name, arr) => 
  arr.map(item => {
      if(item === oldName){
          return {
              item,
              name
          }
      } else {
          return item
      }
  })

let undateSchools = editName('Yorktown','newName',schools)
// console.log(undateSchools)
// console.log(schools)


const editNameEs6 = (oldName, name, arr) =>
  arr.map(item => (item.name === oldName) ?
    ({...item, name}):
    item
  ) 



  const schools_age = {
      "a": 10,
      "b":2,
      "c":6
  } 

  const schoolArray = Object.keys(schools_age).map(key => 
    ({
        name: key,
        wins: schools_age[key]
    })
    )

    // console.log(schoolArray)

    const ages = [21,210,51,65,325,552,845,62,32];

    const maxAge = ages.reduce((max,age) => {
        // console.log(`${age} > ${max} = ${age > max}`);
        if(age > max){
            return age
        } else {
            return max
        }
    },0)
    // console.log('maxAge',maxAge)


    const max = ages.reduce(
        (max, value) => (value > max ) ? value : max,
        0 
    )

    // console.log('maxAge',max)

    /*
    Array.reduceRight,它是从数组的末尾开始处理元素的，而不是数组的起始位置
    */ 

    const colors = [
        {
            id: '一号id',
            title: 'rad red',
            rating: 3
        },
        {
            id: '二号id',
            title: 'big red',
            rating: 2
        },
        {
            id: '三号id',
            title: 'rad grey',
            rating: 5
        },
        {
            id: '四号id',
            title: 'banana',
            rating: 4
        }
    ]

    const hashColors = colors.reduce(
        (hash,{id,title,rating}) => {
          hash[id] = {title, rating}
          return hash
        },
        {}
    )

    // console.log(hashColors)

    const colorsNO = ['red','red','blue']

    const distinctColors = colorsNO.reduce(
        (distinct,color) => 
          (distinct.indexOf(color) !== -1) ?
          distinct :
          [...distinct,color],
          []
    )

    // console.log(distinctColors)

const invokeIf = (condition, fnTrue, fnFalse) => 
  (condition) ? fnTrue() : fnFalse()

const showWelcome = () => 
  console.log("Welcome!!!")

const showUnauthorized = () => 
  console.log("Unauthorized!!!")

// invokeIf(true,showWelcome, showUnauthorized)
// invokeIf(false,showWelcome, showUnauthorized)

// 递归  

const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value -1, fn) : value
}

// 递归处理异步过程的函数式编程技术

const countdown_api = (value,fn,delay = 1000) => {
    fn(value)
    return (value > 0) ?
      setTimeout(() => countdown(value -1 ,fn),delay) :
      value
}

// 递归搜索结构

const deepPick = (field, object = {}) => {
    const [first, ...remaining] = field.split('.')
    return (remaining.length)?
      deepPick(remaining.join("."),object[first]) :
      object[first]
}

const template = "hh:mm:ss:tt"
const clockTime = template.replace("hh","03")
       .replace("mm","33")
       .replace("ss","33")
       .replace("tt","PM")

// console.log(clockTime)

// 高阶函数，合成

const compose = (...fns) =>
  (arg) => 
    fns.reduce(
        (composed, f) => f(composed),
        arg
    )




