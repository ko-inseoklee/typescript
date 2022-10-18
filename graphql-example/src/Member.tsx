import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GetDepartMents, SaveDepartment } from './aplloClient';

export const Member = () => {
    const [depText, setDepText] = useState("");

    const [depOptionValue, setdepOptionValue] = useState(-1);

    const [saveDepartment, {data, loading, error}] = useMutation(SaveDepartment);

    const { loading: depLoading, error: depError, data: depData} = useQuery(GetDepartMents);

    const onDepartmentChanged = (e : any) => {
        setDepText(e.target.value);
    }

    const onCreateDepartment = () => {
        // saveDepartment();
        saveDepartment({variables:{name: depText}});
        setDepText("");

        console.log(depData.departments);
    }

    return <div>
        <div>
            <input placeholder='부서 등록' value={depText} onChange={onDepartmentChanged}/>
            <button onClick={onCreateDepartment}>등록</button>
        </div>
        <div>
            <select value={depOptionValue}>
                <option value="-1">부서 선택</option>
                {/* {
                    depData.departments.map((el : any) => {
                        <option value={el.id}>{el.name}</option>
                    })
                } */}
            </select>
            <input placeholder='사용자 등록' />
            <button>등록</button>
        </div>
    </div>;
}