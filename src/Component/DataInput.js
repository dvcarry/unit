import React, { useState, useEffect } from 'react';
import modalData from './Data/ModalData';
import { Tabs, Modal, Input, Form, Button } from 'antd';
import ButtonAdd from './Small/Button/Button';
// import Form from 'antd/lib/form/Form';
const { TabPane } = Tabs;


const DataInput = () => {

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState('')

    const showModal = type => {
        setVisible(true);
        setType(type);
    }

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000)
    }

    const handleCancel = () => {
        setVisible(false);
    }

    console.log(modalData[type])

    return (
        <div>
            <Tabs>
                <TabPane tab="Продукт" key="1">
                    <ButtonAdd name="Добавить" click={() => showModal('product')} />
                </TabPane>
                <TabPane tab="Показатели" key="2">
                    Content of tab 2
                </TabPane>
                <TabPane tab="Доходы" key="3">
                    Content of tab 3
                </TabPane>
            </Tabs>

            <Modal
                visible={visible}
                title={type}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>Return</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>Submit</Button>,
                ]}
            >
                {
                    !type
                        ? null
                        : <Form layout={'vertical'}>
                            {
                                modalData[type].map(item => {
                                    return (
                                        <Form.Item name={item.name} label={item.label}>
                                            {item.comp}
                                        </Form.Item>
                                    )
                                })
                            }
                        </Form>
                }
            </Modal>
        </div>
    )
}

export default DataInput