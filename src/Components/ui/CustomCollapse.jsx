import React from 'react'
import { Collapse, Space } from 'antd'
import { faqData } from '../../Static/FAQData'

const CustomCollapse = () => (
  <Space direction='vertical'>
    <Space direction='vertical' className='w-full'>
      {faqData.map(({ key, day, month, label, text }) => (
        <div key={key} className='relative'>

          <div className=''>
          <div className='h-[120px] w-[99px] bg-[#5183F4] absolute z-10 rounded-l-[24px] flex flex-col justify-center items-center text-white font-medium text-xl xl:text-3xl'>
            <div>{day}</div>
            <div>{month}</div>
          </div>
            <Collapse
            className='custom-collapse'
              size='large'
              accordion
              items={[
                {
                  key,
                  label,
                  children: <p>{text}</p>,
                },
              ]}
            />
          </div>
        </div>
      ))}
    </Space>
  </Space>
)
export default CustomCollapse
