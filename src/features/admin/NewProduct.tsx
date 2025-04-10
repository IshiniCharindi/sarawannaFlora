import { useState } from 'react'
import { Form, Input, Select, Checkbox, Upload, Button, Row, Col } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { uploadImageRequest } from '../../services/productRequests';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
export default function NewProduct() {

  const [editableText, setEditableText] = useState<any>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };


  // upload the image list
  const uploadImageList = async () => {
    const response = await uploadImageRequest(fileList[0])
    console.log(response)
  }

  return (
      <div className='flex flex-col flex-1 w-full h-full overflow-x-hidden'>
        <Form layout='vertical' style={{ fontWeight: 'bold' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Unit" rules={[{ required: true, message: 'Please input the unit!' }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]} align="bottom">
            <Col xs={24} sm={12} md={6}>
              <Form.Item label="Unit Price (LKR)" rules={[{ required: true, message: 'Please input the price!' }]}>
                <Input type="number" />
              </Form.Item>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <Form.Item label="In Stock" valuePropName="checked">
                <Checkbox defaultChecked />
              </Form.Item>
            </Col>

            <Col xs={12} sm={12} md={6}>
              <Form.Item label="Top Product" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
            <Col  xs={24} sm={12} md={6}>
              <ImgCrop rotationSlider>
                <Upload
                    beforeUpload={(file) => {
                      return true
                    } }
                    customRequest={({ file, onSuccess }) => {
                      onSuccess && onSuccess("ok")
                    }}
                    name="file"
                    maxCount={8}
                    accept='.png,.jpg, .jpeg'
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                  {fileList.length < 5 && '+ Upload'}
                </Upload>
              </ImgCrop>
            </Col>
          </Row>


          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="editableText" label="Product Description">
                <Editor
                    value={editableText}
                    onTextChange={(e: EditorTextChangeEvent) => setEditableText(e.htmlValue)}
                    style={{ height: '320px' }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center" gutter={[16, 16]} className="!max-w-[900px]">
            <Col>
              <Button type="primary" style={{ margin: '10px' }} onClick={uploadImageList}>Submit</Button>
            </Col>
            <Col>
              <Button type="default" style={{ margin: '10px' }} className="!border-red-500 !text-red-500">Reset</Button>
            </Col>
          </Row>
        </Form>
      </div>
  );
}
