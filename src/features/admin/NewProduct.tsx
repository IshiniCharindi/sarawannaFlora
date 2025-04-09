import React, {useState} from 'react'
import {Form, Input, Select, Checkbox, Upload, Button} from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
export default function NewProduct() {
  


    const [fileList, setFileList] = useState<UploadFile[]>([
      // {
      //   uid: '-1',
      //   name: 'image.png',
      //   status: 'done',
      //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      // },
    ]);
  
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




  return (
    <div className='flex flex-col flex-1 w-full h-full'>
      <Form 
      layout='vertical' style={{fontWeight: 'bold'}}>
        <div className="form-row">
          <Form.Item label="Title" 
          style={{margin: '5px', flex: '2 1 0'}}
          rules={[
            { required: true, message: 'Please input the title!' },]}>
            <Input />
          </Form.Item>

          <Form.Item label="Category" 
          style={{margin: '5px', flex: '1 1 0'}}
          rules={[
            { required: true, message: 'Please input the title!' },]}>
            <Select/>
          </Form.Item>

          <Form.Item label="Unit" 
          style={{margin: '5px', flex: '1 1 0'}}
          rules={[
            { required: true, message: 'Please input the title!' },]}>
            <Input />
          </Form.Item>
        </div>


        <div className="form-row items-end">
          <Form.Item label="Unit Price (LKR)"
          style={{margin: '5px', flex: '0 1 200px', marginRight: '150px'}}
          rules={[
            { required: true, message: 'Please input the title!' ,},]}>
              <Input type='number'/>
          </Form.Item>


          <Form.Item label="In Stock"
          layout='horizontal'
          style={{margin: '5px', flex: '0 1 100px', fontWeight: 'bold'}}
          rules={[
            { required: true, message: 'Please input the title!' ,},]}>
              <Checkbox checked/>
          </Form.Item>

          <Form.Item label="Top Product"
          layout='horizontal'
          style={{margin: '5px', flex: '0 1 100px', fontWeight: 'bold'}}
          rules={[
            { required: true, message: 'Please input the title!' ,},]}>
              <Checkbox/>
          </Form.Item>
        </div>

        <div className="form-row my-10">
          <ImgCrop rotationSlider>
            <Upload
            maxCount={8}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </div>


        <div className="form-row">
            <Form.Item label="Description"
          name="description"
          style={{margin: '5px', flex: '0 1 100px', flexGrow: 1}}
          rules={[
            { required: true, message: 'Please input the title!' ,},]}>
              <Input.TextArea rows={10} cols={60}/>
            </Form.Item>
        </div>


        <div className="form-row !max-w-[900px]">
          <Button type='primary' style={{flex: 1, margin: '10px'}}>Submit</Button>
          <Button type='default' style={{flex: 1, margin: '10px'}} className='!border-red-500 !text-red-500'>Reset</Button>
        </div>

      </Form>
    </div>
  )
}
