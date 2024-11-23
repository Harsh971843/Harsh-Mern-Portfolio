import React from 'react'
import { Form,input } from 'antd';

function AdminAbout() {
  return (
    <div>
      <div>
        <Form>
            <Form.Item name="firstname" >
                <input type="text" placeholder="Enter Your Name"/>
            </Form.Item>
            <Form.Item name="profession">
                <input type="text" placeholder="Enter Your Profession"/>
            </Form.Item>
            <Form.Item name="description">
                <textarea name="Description" id="" placeholder='Description'></textarea>
            </Form.Item>
            <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-5">Save</button>
            </div>
        </Form>
      </div>
    </div>
  )
}

export default AdminAbout;
