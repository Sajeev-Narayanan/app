import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { managersData } from '../../features/managersAuthSlice';
import axios from '../../config/axios'
import { useToast } from '@chakra-ui/toast';
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { MdBackspace } from 'react-icons/md';

const CreateEstimateModal = ({ visible, onClose, userId, managerId }) => {
    // console.log(inService);
    const [data, setData] = useState("");
    const [service, setService] = useState("");
    const [error, setError] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState(0);
    const [estimate, setEstimate] = useState([]);
    const toast = useToast();

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()
    };

    const changeData = (e) => {

        setError("")
        e.target.value == "#" ? setError("Select one") : setService(e.target.value)

    }
    const addHandler = () => {
        const added = estimate.filter((e) => {
            if (e.service === service) {
                return true
            } else {
                return false
            }
        })
        console.log(added, "aadddeeeedddd")

        if (added == false) {
            setEstimate(prevState => [...prevState, { service, price }])
            setTotal(prevState => Number(prevState) + Number(price))
        }
    }
    const backPlace = () => {
        setEstimate(estimate.slice(0, -1))
        const element = estimate[estimate.length - 1]
        setTotal(prevState => Number(prevState) - Number(element.price))
    }

    const saveHandler = async () => {
        if (estimate.length > 0) {
            const response = await axios.post('/provider/addEstimate', { userId, managerId, estimate })
            if (response.status === 201) {
                toast({
                    position: "top",
                    variant: 'left-accent',
                    status: 'success',
                    isClosable: true,
                    title: 'Estimate added successfully',

                })
                onClose()
            } else {
                setError("select one")
                toast({
                    position: "top",
                    variant: 'left-accent',
                    status: 'error',
                    isClosable: true,
                    title: 'Estimate adding failed',

                })
            }
        } else {
            setError("Select one item")
        }
    }

    if (!visible) return null;
    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>

            <div className='bg-white w-[700px] pb-5 min-h-[500px] flex flex-col rounded-3xl m-2'>
                <div className='flex flex-row-reverse text-4xl p-4 border-b-2 border-black'>
                    <button onClick={onClose} ><AiFillCloseCircle /></button>
                </div>
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-semibold mb-8'>Add Service</h1>

                    <select
                        name="service"
                        value={service}
                        onChange={changeData}
                        className='border-2 border-gray-400 rounded-3xl h-16 w-[85%] text-xl font-semibold p-4'>
                        <option value="#">--Select Services--</option>
                        <option value="Wedding planning">Wedding planning</option>
                        <option value="Personal events">Personal events</option>
                        <option value="Commercial events">Commercial events</option>
                        <option value="Birthday party">Birthday party</option>
                        <option value="Live music & orchestra" placeholder='fj'>Live music & orchestra</option>
                        <option value="Entertainment shows">Entertainment shows</option>
                        <option value="Bridal makeup">Bridal makeup</option>
                        <option value="Photography">Photography</option>
                        <option value="Travels">Travels</option>
                        <option value="Catering services">Catering services</option>
                        <option value="Decoration">Decoration</option>
                        <option value="Security">Security</option>
                        <option value="Others">Others</option>
                    </select>
                    <input type="number" name="price" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-400 rounded-3xl h-16 w-[85%] text-xl font-semibold p-4 mt-4' />
                    {error != "" && <p className='text-red-600'>{error}</p>}
                    <button className='bg-blue-500 hover:bg-blue-600 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase' onClick={addHandler}>ADD</button>

                    {estimate.length > 0 && (
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Services</Th>
                                        <Th>  </Th>
                                        <Th isNumeric>price</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {estimate.map((e) =>
                                    (
                                        < Tr >
                                            <Td>
                                                {e.service}
                                            </Td>
                                            <Td>  </Td>
                                            <Td>
                                                {e.price}
                                            </Td>
                                        </Tr>
                                    )
                                    )}

                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Total</Th>
                                        <Th></Th>
                                        <Th>{total}</Th>
                                    </Tr>
                                </Tfoot>


                            </Table>

                            <button className='w-full bg-gray-300 p-1 text-2xl rounded-lg flex justify-center' onClick={backPlace}><MdBackspace className='self-end mr-2' /></button>
                        </TableContainer>
                    )}

                    <button onClick={saveHandler} className='bg-green-500 hover:bg-green-600 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase'>save</button>
                </div>
            </div>


        </div >
    )
}

export default CreateEstimateModal