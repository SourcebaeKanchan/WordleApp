import { useEffect, useState } from "react";
import "./style.css"
import { IoBackspaceOutline } from "react-icons/io5";
import PositionedSnackbar from "./popup";


function Wordle() {
    const arr = [1, 2, 3, 4, 5]
    const arr2 = [1, 2, 3, 4, 5, 6]

    let arrA = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    let arrB = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    let arrC = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', <IoBackspaceOutline color="#000000" size={32} id="del" />]

    let k = -1;

    const [matarr, setmatrixArray] = useState([])
    const [itemstorage, setItemStorage] = useState(null)
    const [dataStorage, setdataStorage] = useState([])
    const [rowIndex, setRowIndex] = useState(0)
    const [green, setGreen] = useState([])
    const [yellow, setYellow] = useState([])
    const [grey, setGrey] = useState([])
    const [message, setMessage] = useState('')
    // const [copyArr2,setCopyArr2]=useState([...arr2])
    const Word = 'YMPYT'  //'EMETY' //'EMPTY

    const match = (wordcmp, datastoragecmp) => {

                                                 // let arr3 = ['A' , 'B' , 'C' , 'D' , 'D' , 'A' , 'Z', 'C']
function removeDuplicatesWordle(datastoragecmp) {
	return datastoragecmp.filter((item,
		index) => datastoragecmp.indexOf(item) === index);
}

let hello = removeDuplicatesWordle(datastoragecmp)
console.log(hello ,"counting duplicates");
//counting duplicates
let count 
let occur = hello.map((value)=>{
    count = 0
    datastoragecmp.map((item)=>{
        if(item===value)
        {
            count++
        }
    })
    return count
})

console.log(occur , "yha pe count pta chlega")

//pushing array values in array of object
let arrs = []


        

        const newArr = datastoragecmp.map((item, idx) => { //Normal map Hm tb chlate h jb kuch return nhi krana h ,jaise sirf carddata display krana h.. Nhi to return krane pe ek variablepe store krayenge aur fir return krayenge

            if (wordcmp.includes(item)) {
                let word = wordcmp.split("") //wordcmp hmara word naam ka array bn gya. // Sir k students k liye test lena h weekly test,weekly assignment // interview questions ready bnana h.. // aur placement k liye refer krna h..

                if (word[idx] === datastoragecmp[idx])
                 {
                    let i = hello.indexOf(datastoragecmp[idx])
                    occur[i]=occur[i]-1 
                    return idx
                 }   
                else
                {
                    let i = hello.indexOf(word[idx])
                    if(occur[i]>=1)
                    {
                        return item
                    }
                    else
                    {
                        return null  
                    }   
                }      
            }
            else
                return null
        })
        return newArr
    }

    const handleOnclick = (item) => {
        if (dataStorage.join('') === Word && rowIndex === 6 && dataStorage.length === 5) {
            setMessage("Congratulations  You Won. Please Start a New Game")  //New Game

        }

        else {
            if (rowIndex < 6 && dataStorage.length < 5) {
                setmatrixArray(prevmatvalue => [...prevmatvalue, item])
                console.log("Yeh This is matrix")


            }


            if (rowIndex < 6) {
                setItemStorage(item)
                if (dataStorage.length < 5) {
                    setdataStorage(prevdataStorage => [...prevdataStorage, item]) //shallow copy, deep copy. //Pragati Patel

                }

            }
            else {
                setMessage("You have reached maximum no. of attempts . Please restart the game")

                //Game Exit and Game Restart
            }
        }
    }

    const handleBackSpace = () => {
        if (dataStorage.join('') === Word && rowIndex === 6 && dataStorage.length === 5) {
            setMessage("Congratulations  You Won. Please Start a New Game")  //New Game

        }
        else {
            if (rowIndex >= 6) {
                setMessage("You have reached maximum no. of attempts . Please restart the game")
            }
            else {
                console.log("Element Popped UP")
                k--

                if (dataStorage.length >= 1 && rowIndex < 6) {
                    setdataStorage(dataStorage.splice(0, dataStorage.length - 1))
                    setmatrixArray(matarr.splice(0, matarr.length - 1))

                }
            }
        }


    }

    const matchArr = () => {
        var check = match(Word, dataStorage) // match function calling 
        let num = 4;
        let temp1 = check.map((item) => {
            if (typeof item === typeof num)
                return true
            else
                return false

        })
        // setGreen(temp1) 
        temp1.forEach(element1 => {
            setGreen(prevgreenvalue => [...prevgreenvalue, element1])

        });

        let ylwname = "Radha"
        let temp2 = check.map((item) => {
            if (typeof item === typeof ylwname)
                return true
            else
                return false

        })

        //setYellow(temp2)
        temp2.forEach(element2 => {
            setYellow(prevyellowvalue => [...prevyellowvalue, element2])
        })

        let nullbody = null
        let temp3 = check.map((item) => {
            if (typeof item === typeof nullbody)
                return true
            else
                return false

        })

        //setYellow(temp2)
        temp3.forEach(element3 => {
            setGrey(prevgreyvalue => [...prevgreyvalue, element3])
        })
    }

    const handleEnter = () => {

        if (dataStorage.join('') === Word && rowIndex === 6 && dataStorage.length === 5) {
            setMessage("Congratulations  You Won. Please Start a New Game")  //New Game
        

        }
        else {

            if (rowIndex >= 6) {
                setMessage("You have reached maximum no. of attempts . Please restart the game")

            }
            else {
                if (dataStorage.length === 5) {
                    matchArr()
                    if (dataStorage.join('') === Word) {
                        console.log("Congratulations  You Won")
                        setMessage("Congratulations  You Won")
                        setTimeout(() => {
                            window?.location?.reload()
                        }, 3000);
                        setRowIndex(6)

                        // setdataStorage([]) //Game Exit and Game Restart
                    } else {
                        if (rowIndex < 5) {
                            console.log("Incorrect Guess . PleaseTry Again")
                            setMessage("Incorrect Guess . PleaseTry Again")
                            dataStorage.splice(0, dataStorage.length)
                        }
                        // matchArr()

                        setRowIndex(rowIndex + 1)

                    }


                    console.log(dataStorage)

                }
            }
        }



    }

    useEffect(() => {
        console.log(dataStorage, "dataStorage")
        console.log(matarr, "MatrixArray")
        console.log(green, "GReean arrray status")
        console.log(yellow, "Yellow Array status")

    }, [itemstorage, dataStorage, matarr, green, yellow])


    return (
        <div className="outer-box" >
            <h1> Wordle </h1>

            <div className="inner-box" style={{ width: "300px", height: "360px" }}>
                {
                    arr2?.map((item, i) => {
                        return <div className="group" key={i.toString()} >

                            {arr?.map((ele, index) => {
                                let itr = rowIndex - 1
                                k++
                                return <div
                                    className={`Box ${green[k] && i === itr && 'greenBox' || green[k] && i < itr && 'greenBox' || yellow[k] && i === itr && 'yellowBox' || yellow[k] && i < itr && 'yellowBox' || grey[k] && i === itr && 'greyBox' || grey[k] && i < itr && 'greyBox'} `}
                                    // className={`Box ${false ? 'bg-red-900' : 'border-[4px] border-red-900'} `}
                                    key={index.toString()}  >

                                    {
                                        (i === rowIndex) ? dataStorage[index] : (i < rowIndex) ? matarr[k] : ""

                                    }

                                </div>

                            })}
                        </div>

                    })

                }
            </div>

            <div className="keyboard">

                <div className="row">
                    {

                        arrA?.map((item, index) => {
                            return <button key={index.toString()} className="keyboar_btn" onClick={() => handleOnclick(item)}>{item} </button>

                        })
                    }

                </div>

                <div className="row">
                    {

                        arrB?.map((item, index) => {
                            return <button key={index.toString()} className="keyboar_btn" onClick={() => handleOnclick(item)}>{item} </button>

                        })

                    }

                </div>

                <div className="row">
                    {

                        arrC?.map((item, index) => {
                            return <button key={index.toString()} className="keyboar_btn"
                                onClick={() => {
                                    if ((item === 'ENTER') || (index === (arrC.length - 1))) {

                                        if (item === 'ENTER') {


                                            if (rowIndex === 5 && dataStorage.length === 5 && dataStorage.join('') !== Word) {
                                                handleEnter()
                                                if (rowIndex === 5) {
                                                    if (dataStorage.join('') === Word) {
                                                        setMessage("You Won the Game. Click Next to start new match.")
                                                        //   <PositionedSnackbar message={'You Won the Game. Click Next to start new match.'} />

                                                    }

                                                    else {
                                                        setMessage("Sorry , You Cannot guess the word this time . No. of attempts Exhausted .  Game Over. Better Luck Next Time !!!")

                                                    }

                                                }

                                            }
                                            else {
                                                handleEnter()


                                            }

                                        }
                                        if (index === (arrC.length - 1)) {


                                            handleBackSpace()

                                        }

                                    }
                                    else {
                                        handleOnclick(item)
                                    }

                                }}> {item === 'ENTER' ? <PositionedSnackbar message={message} /> : <p>{item}</p>} </button>
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Wordle