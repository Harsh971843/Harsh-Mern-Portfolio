import React from 'react'
import { Form,input } from 'antd';
import { useSelector } from 'react-redux';

function AdminProject() {
    const {portfoliodata} =  useSelector(state => state.root);
  return (
    <div>
      <div>
        <Form initialValues={portfoliodata.project}>
        <Form.Item name="Date" >
                <input type="text" placeholder="Enter Your Project Date"/>
            </Form.Item>
            <Form.Item name="Project_name" >
                <input type="text" placeholder="Enter Your Project Name"/>
            </Form.Item>
            <Form.Item name="Tools">
                <input type="text" placeholder="Enter Your Enter Your Project Tools"/>
            </Form.Item>
            <Form.Item name="Link">
                <input type="text" placeholder="Enter Your Link"/>
            </Form.Item>
            <Form.Item name="Description">
                <textarea name="Description" id="" placeholder='Description'></textarea>
            </Form.Item>
            <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-5" >Save</button>
            </div>
        </Form>
      </div>
    </div>
  )
}

export default AdminProject;
