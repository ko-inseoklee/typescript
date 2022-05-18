import React, {useState} from 'react';

type MyFormProps = {        // 페이지에서 원하는 데이터를 하나로 묶어주는 타입.
    onSubmit: (form: {name: string, description: string}) => void;
};

/* 
    //? 왜 여기는 FC extend 안함?
    function component의 return type => JSX.element || React.FC

    difference? implicit children props의 유무. => 최적화의 문제인듯?
    타입스크립트에서는 그래서 children이 필요없는 FC의 경우 VFC를 사용한다고.. (void function component)
    
    제(이인석) 생각에는 VFC ~~ JSX.element 일지도?
*/

export default function MyForm({onSubmit} : MyFormProps){
    
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    
    const {name, description} = form;   // Destructing이기 때문에 11번째 줄에서 선언한 form의 name, description props를 variable로 선언한다고 보면 됨.

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {  //? e: 리액트에서 정의해놓은 Event Object.
        console.log(form);
        console.log(e);
        const {name, value} = e.target; // name, value는 Reace.ChangeEvent에서 제공하는 properties
        setForm({
            
            ...form,
            [name]: value   //TODO 왜 name을 감쌈? => 21번째 줄의 name을 가져오기 위해서.
                            //! 얘는 name이 n에 해당한다는 것을 어떻게 알지? 
                            /* 
                                input 태그의 name attribute와 일치하는 type의 props를 찾아 집어넣음.
                            */
                           
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //? 이벤트가 끝난 이후 처음 상태를 유지하기 위해 Refresh하는 것을 막아줌.
        onSubmit(form); //? MyForm이 호출되면서 넘어온 Argument. 현재 Console.log() 상태.
        setForm({
            name: '',
            description: ''
        }); //? 초기화
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}
