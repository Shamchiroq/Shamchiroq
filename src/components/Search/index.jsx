import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

export const Search = ({placeholder}) => {
    return (
        <div className='flex gap-x-2 my-12'>
            <Input className='search' size="large" placeholder={placeholder} prefix={<SearchOutlined />} />
            <Button size='large' className='search-btn'>Qidirish</Button>
        </div>
    )
}
