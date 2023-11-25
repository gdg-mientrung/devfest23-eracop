import { useState } from "react";
import {Modal,Card} from "antd";
import FittingRoom  from '@/components/vfr-modal`';

const { Meta } = Card;

export default function Item({clothes}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const showModal = () => {
        setSelectedProduct(clothes);
        setIsModalOpen(true);
      };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    return (
        <div>
            <Modal width={2480} title="Virtual Fitting Room" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}  okButtonProps={{
                className: "border-1 border-slate-900 border-solid text-black", 
  }}>
            <FittingRoom selectedProduct={selectedProduct}/>
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
                    <p className="font-medium" onClick={
                        ()=> {
                            showModal();
                        }
                    }>Try on</p>,
                    <p></p>,
                ]}
            >
                <Meta title={clothes.Name}/>
            </Card>
        </div>
    )
}