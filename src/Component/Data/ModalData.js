import React from 'react';
import { Input, Select, InputNumber } from 'antd';


const modalData = {
    product: [
        {
            name: 'name',
            label: 'Название',
            comp: <Input />,
        }, 
        {
            name: 'price',
            label: 'Стоимость',
            comp: <InputNumber type='number'/>,
        },        
    ]
}

export default modalData;