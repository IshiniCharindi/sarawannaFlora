import { useEffect, useState } from 'react'
import { Form, Input, Select, Checkbox, Upload, Button, Row, Col, Grid } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Editor, EditorTextChangeEvent } from "primereact/editor";
import { uploadImageRequest } from '../../services/productRequests';
import {PlusCircleOutlined} from '@ant-design/icons'
import CategoryEditor from './CategoryEditor';
import Category, { CategoryServices } from '../../models/Category';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const { useBreakpoint } = Grid;

export default function NewProduct() {
  const screens = useBreakpoint();
  const [editableText, setEditableText] = useState<any>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileQue, setFileQue] = useState<Array<File>>([])
  const [catPopup, setCatpop] = useState<boolean>(false)

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

  const uploadImageList = async () => {
    // const response = await uploadImageRequest(fileQue);

  }



  const [categoryList, setCategoryList] = useState<Array<Category>>([])
  // Load the existing categories 
  const loadCategories = async () => {
    const res = await CategoryServices.loadCategories()
    if(res) setCategoryList(res);
    else {
        // Display Error as failed to load categories
    }
  }

    useEffect(() => {
      loadCategories()
    }, [catPopup])


    const formSubmission = (values: any) =>{
      console.log(values,editableText)
    }

    const [newFormRef] = Form.useForm()
  return (
      <div className='flex flex-col flex-1 w-full h-full overflow-x-hidden p-4'>
        {catPopup && <CategoryEditor closer={setCatpop}/>}
        <Form 
        initialValues={{
          description: '',
          topProduct: false,
          inStock: true
        }}
        form={newFormRef}
        onFinish={formSubmission}
        layout='vertical' style={{ fontWeight: 'bold' }} encType='multipart/form-data'>
          {/* Title, Category, Unit Row */}
          <Row gutter={[16, 16]} style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Col flex="1 1 300px">
              <Form.Item 
              name='title'
              required label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
                <Input size={screens.xs ? 'middle' : 'large'} style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col flex="1 1 300px">
              <Form.Item 
              name='category'
              required label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <Select size={screens.xs ? 'middle' : 'large'} style={{ width: '100%' }}>
                  {
                    categoryList.map((element, index) => {
                      return (<Select.Option key={index} value={element.catId}>{element.name}</Select.Option>)
                    })
                  }
                </Select>
              </Form.Item>
            </Col>

            <Col flex="1 1 100px" className='flex items-center'>
              <PlusCircleOutlined className='text-3xl cursor-pointer' onClick={() => setCatpop(true)}/>
            </Col>
          </Row>

          {/* Price, Checkboxes, Upload Row */}
          <Row gutter={[16, 16]} align="middle">
            <Col flex=" 1 1 150px">
              <Form.Item 
              name='unitMeasured'
              required label="Unit" rules={[{ required: true, message: 'Please input the unit!' }]}>
                <Input size={screens.xs ? 'middle' : 'large'} />
              </Form.Item>
            </Col>

            <Col flex=" 1 1 150px">
              <Form.Item 
              name='unitPrice'
              required label="Unit Price (LKR)" rules={[{ required: true, message: 'Please input the price!' }]}>
                <Input type="number" size={screens.xs ? 'middle' : 'large'} />
              </Form.Item>
            </Col>

            <Col flex="1 1 150px" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Form.Item 
              name='inStock'
              layout='horizontal'
                  label="In Stock"
                  valuePropName="checked"
                  style={{
                    marginBottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                  }}
            
              >
                <Checkbox defaultChecked />
              </Form.Item>
            </Col>

            <Col flex="1 1 150px" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Form.Item 
              name='topProduct'
              layout='horizontal'
                  label="Top Product"
                  valuePropName="checked"
                  style={{
                    marginBottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                  }}
              >
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Col xs={24} sm={24} md={24} style={{ width: '100%' }}>
            <Form.Item label="Images">
              <ImgCrop rotationSlider>
                <Upload
                    beforeUpload={(file) => {
                      console.log('Before upload:');
                      return true

                    }}
                    customRequest={({ file, onSuccess }) => {
                      setFileQue(pre => { return [...pre, file as File]})
                      onSuccess && onSuccess("ok")
                    }}
                    name="file"
                    maxCount={8}
                    // action={'http://localhost:3000/product/uploadImage'}
                    accept='.png,.jpg,.jpeg'
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    style={{ width: '100%' }}
                    className="custom-upload-list"
                >
                  {fileList.length < 8 && '+ Upload'}
                </Upload>
              </ImgCrop>
            </Form.Item>
          </Col>


          {/* Description Editor */}
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="description" label="Product Description">
                <Editor
                    value={editableText}
                    onTextChange={(e: EditorTextChangeEvent) => setEditableText(e.htmlValue)}
                    style={{ height: screens.xs ? '220px' : '320px' }}
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Buttons */}
          <Row
              justify="center"
              gutter={[16, 16]}
              style={{
                maxWidth: '900px',
                margin: '0 auto',
                width: '100%'
              }}
          >

            <Col
                xs={24}  // Full width on mobile
                sm={12}  // Half width on tablet+
                md={8}   // Smaller width on desktop
                lg={6}   // Even smaller on large screens
                style={{
                  minWidth: screens.xs ? '100%' : '200px',  // Minimum button width
                  padding: '0 8px'  // Internal spacing
                }}
            >
              <Button
                  type='primary'
                  htmlType='submit'
                  size={screens.xs ? 'middle' : 'large'}
                  block
                 
                  style={{
                    height: screens.xs ? '40px' : '48px',  // Consistent button height
                    fontSize: screens.xs ? '14px' : '16px'  // Responsive text size
                  }}
              >
                Submit
              </Button>
            </Col>

            <Col
                xs={24}  // Full width on mobile
                sm={12}  // Half width on tablet+
                md={8}   // Smaller width on desktop
                lg={6}   // Even smaller on large screens
                style={{
                  minWidth: screens.xs ? '100%' : '200px',  // Minimum button width
                  padding: '0 8px'  // Internal spacing
                }}
            >

              
              <Button
                  type="default"
                  size={screens.xs ? 'middle' : 'large'}
                  block
                  className="!border-red-500 !text-red-500"
                  style={{
                    height: screens.xs ? '40px' : '48px',  // Consistent button height
                    fontSize: screens.xs ? '14px' : '16px'  // Responsive text size
                  }}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
  );
}