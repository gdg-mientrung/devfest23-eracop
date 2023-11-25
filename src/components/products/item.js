import { useState } from "react";
import {Modal,Card} from "antd";
const { Meta } = Card;

export default function Item({clothes}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <div>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={
                <img
                    alt="example"
                    src={clothes.url}
                />
                }
                actions={[
                    <p></p>,
                    <p className="font-medium" onClick={showModal}>Try on</p>,
                    <p></p>,
                ]}
            >
                <Meta title={clothes.Name}/>
            </Card>
        </div>
    )
}