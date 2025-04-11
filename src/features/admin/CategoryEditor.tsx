import React, {useEffect, useRef, useState} from 'react'
import { selfCloser } from '../../middleware/responsive'
import {motion} from 'framer-motion'
import {Input, Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import Category , {CategoryServices} from '../../models/Category'


export default function CategoryEditor(props: any) {

    const [categoryList, setCategoryList] = useState<Array<Category>>([])
    const [category, setCategory] = useState<Category>({})
    const [refreshCat, setRefreshCat] = useState<boolean>(false)
    const popupRef = useRef(null)

    // Load the existing categories 
    const loadCategories = async () => {
        const res = await CategoryServices.loadCategories()
        if(res) setCategoryList(res);
        else {
            // Display Error as failed to load categories
        }
    }

    const addNewCategory = async () => {
        if((category.name ?? '').toString().length >= 2) {
            const res = await CategoryServices.createNewCategory(category)
            if(res) {
                setCategory({})
                setRefreshCat(pre => !pre)
                // Category updated success
            } else {
                // Error as Update fail
            }
        } else {
            // Error as Category should consist @ least 2 characters
        }
    }

    useEffect(() => {
        loadCategories()
    }, [refreshCat])

    useEffect(() => {
        window.addEventListener('mousedown', (e) => selfCloser(e, popupRef, () => {
            props.closer(false)
        }))
        return(() => {
            window.removeEventListener('mousedown', (e) => selfCloser(e, popupRef, () => {
                props.closer(false)
            }))
        })
    }, [])

  return (
    <div className='absolute inset-0 bg-[#0000007e] z-20 flex flex-col justify-center items-center'>
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        ref={popupRef} className="w-[500px] h-fit max-w-[90vw] max-h-[70vh] bg-white z-21 rounded-2xl p-2.5">
            <h1 className='m-5 font-bold text-3xl'>Category Editor</h1>

            {/* Shows the existing categories */}
            <div className="row flex-wrap">
                {
                    categoryList.map((element, index) => {
                        return (<div className='flex m-1 flex-row px-3 py-1 bg-[#101A33] text-white rounded-[5px] items-center' key={index}><h2 className='p-1 whitespace-nowrap'>{element.name}</h2><DeleteOutlined/></div>)
                    })
                }

            </div>
            <h3>New Category</h3>
            

            <div className="row w-full">
                <Input type="text" value={category.name} onChange={(e) => setCategory(pre => ({...pre, name: e.target.value}))}/>
                <Button type='primary' onClick={addNewCategory} className='mx-2'>Add</Button>
            </div>
        </motion.div>

    </div>
  )
}
