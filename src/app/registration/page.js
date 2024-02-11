'use client'

import React, { useState } from 'react'
import FormInput from '@/components/Inputs/FormInput'
import Dropdown from '@/components/Inputs/Dropdown'
import PrimaryBtn from '@/components/Button/PrimaryBtn'
import Form from '@/components/Form/Form'
import usePost from '@/hooks/usePosts'


export default function Registration() {
    // for form submission 
    const { data, error, loading, postData } = usePost('/userdata/');
    const [userData, setUserData] = useState({})



    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-96" >
          {/* {
            !userLoading ? userDetails["name"] : ""
          } */}
          <Form title="User Registration" >
            
              <label className="block">
                  <FormInput changedValue={(name) => setUserData({...userData, "name":name })} type="text" label="name" errorMsg={error["name"]} placeholder="Edit your name"/>
              </label>

              <label className="block">
                  <FormInput changedValue={(phone_number) => setUserData({...userData, "phone_number":phone_number })} type="number" label="phone" placeholder="Edit your phone no" />
              </label>


              

              
              <PrimaryBtn clickHandler={() => submitData()} title="Submit" />
          </Form>
      </div>

    </main>
  )
}
