import React, { useState } from "react";

export default function UserSym({
  handleRenderComponent,
  question,
  options,
  option_type,
  facet,
  getSymptumDetails,
}) {


  const [checkedOptions , setCheckedOptions] = useState({});

  let radioValue = "";

  let isSingleOption = false;
  const [symInputData, setSymInputData] = useState({
    ques: "",
    checked_option: [],
  });



  if (option_type === "singal_option") {
    radioValue = symInputData.checked_option[0]?.option_name;

    isSingleOption = true;
  }
  const resetSymInputData = async() => {

    console.log("Resetting the state");
    await setSymInputData({
      ques: "",
      checked_option: [],
    });
    setCheckedOptions({});
  };
  
  const setSymData = async (e, question, option_type = "multi_option") => {
    if (option_type === "singal_option") {
      let data = {
        option_name: e.target.name,
        value: e.target.checked,
      };

     await  setSymInputData({
        ...symInputData,
        ques: question,
        checked_option: [data],
        
      });
      setCheckedOptions((prevState)=>({
        ...prevState,
          [e.target.name]: true
      }))
    } else {
      if (!e.target.checked) {
        let newData = symInputData.checked_option.filter((data) => {
          console.log(data.option_name, e.target.name);
          return data.option_name != e.target.name;
        });

        await  setSymInputData({
          ...symInputData,
          ques: question,
          checked_option: [...newData],
        });
        setCheckedOptions((prevState)=>({
          ...prevState,
            [e.target.name]: true
        }))
      } else {
        let data = { option_name: e.target.name, value: e.target.checked };

        await  setSymInputData({
          ...symInputData,
          ques: question,
          checked_option: [...symInputData.checked_option, data],
        });
        setCheckedOptions((prevState)=>({
          ...prevState,
            [e.target.name]: true
        }))
      }
    }
  };






  console.log(symInputData,'symtumData');
  return (
    <>
      <div>
        <div>
          <h2>{question}</h2>
        </div>

        <div>
        {!isSingleOption
          ? options.map((data,index) => {
            return (
              <div>
  
                    <input
                      type="checkbox"
                      id={data.id}
                      name={data.option}
                       checked={checkedOptions[data.option] || false}
                      onChange={(e) => setSymData(e, question, option_type)} 
  
                    />
                    <label htmlFor={data.id}>{data.option}</label>
                  </div>
                );
              })
            : options.map((data) => {
                return (
                  <div>
                    <input
                      type="radio"
                      checked={radioValue === data.option}
                      name={data.option}
                      onChange={(e) => setSymData(e, question, option_type)}
                    />
                    <label>{data.option}</label>
                  </div>
                );
              })}
        </div>
        {facet && (
          <div>
            <h5>Face Tip</h5>
            <p>{facet.text}</p>
          </div>
        )}

        <button
          onClick={async() => {
            radioValue = null;
           
              await resetSymInputData(); // Reset the state
          
         
            handleRenderComponent()
          }}
        >
          Button
        </button>
      </div>
    </>
  );
}
