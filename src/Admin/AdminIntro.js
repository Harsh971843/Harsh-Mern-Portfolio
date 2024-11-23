import React from 'react'
import { Form, Input, message } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Showloading, HideLoading } from '../redux/rootslice';
// import { Showloading} from '../../../redux/rootslice';
// import { HideLoading } from '../../../redux/rootslice';
import axios from 'axios';

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfoliodata } = useSelector(state => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post("/portfolio/update-intro", {
        intro: values.intro,
        _id: portfoliodata._id,
      });
      dispatch(HideLoading());
      if (response.data.message) {
        message.success(response.data.message)
      } else {
        message.error(response.data.error)
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
    // console.log(values);
    // try {
    //   dispatch(Showloading())
    //   const res = await axios.post('/adminintro', {
    //     ...values,
    //     _id:portfoliodata._id,
    //   });
    //   dispatch(HideLoading())
    //   if(res.updatedIntro.success){
    //     alert('Intro updated successfully');
    //   }else{
    //     alert('Intro update failed');
    //   }
    // } catch (error) {
    //   dispatch(HideLoading())
    //   message.error(error.message)
    // }
  }
  return (
    <div>
      <div>
        <Form onFinish={onFinish} initialValues={portfoliodata.intro}>
          <Form.Item name="firstname" >
            <Input type="text" placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item name="profession">
            <Input type="text" placeholder="Enter Your Profession" />
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

export default AdminIntro;