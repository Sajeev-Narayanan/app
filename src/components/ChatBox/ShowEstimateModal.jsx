import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { managersData } from '../../features/managersAuthSlice';
import axios from '../../config/axios'
import { useToast } from '@chakra-ui/toast';
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import useSWR from "swr";
import { MdBackspace } from 'react-icons/md';

const ShowEstimateModal = ({ visible, onClose, userId, managerId }) => {
    // const [data, setData] = useState("");
    // const [service, setService] = useState("");
    // const [error, setError] = useState("");
    // const [price, setPrice] = useState("");
    const [total, setTotal] = useState(0);
    const [estimate, setEstimate] = useState([]);
    const toast = useToast();

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose()
    };

    // const changeData = (e) => {

    //     setError("")
    //     e.target.value == "#" ? setError("Select one") : setService(e.target.value)

    // }
    // const addHandler = () => {
    //     const added = estimate.filter((e) => {
    //         if (e.service === service) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     })
    //     console.log(added, "aadddeeeedddd")

    //     if (added == false) {
    //         setEstimate(prevState => [...prevState, { service, price }])
    //         setTotal(prevState => Number(prevState) + Number(price))
    //     }
    // }
    // const backPlace = () => {
    //     setEstimate(estimate.slice(0, -1))
    //     const element = estimate[estimate.length - 1]
    //     setTotal(prevState => Number(prevState) - Number(element.price))
    // }

    // const saveHandler = async () => {
    //     if (estimate.length > 0) {
    //         const response = await axios.post('/provider/addEstimate', { userId, managerId, estimate })
    //         if (response.status === 201) {
    //             toast({
    //                 position: "top",
    //                 variant: 'left-accent',
    //                 status: 'success',
    //                 isClosable: true,
    //                 title: 'Service added successfully',

    //             })
    //             onClose()
    //         } else {
    //             setError("select one")
    //             toast({
    //                 position: "top",
    //                 variant: 'left-accent',
    //                 status: 'error',
    //                 isClosable: true,
    //                 title: 'Service adding failed',

    //             })
    //         }
    //     } else {
    //         setError("Select one item")
    //     }
    // }
    // const fetcher = (url) => axios.post(url, { userId, managerId }).then((res) => res.data);
    // // .catch((err) => console.log(err));
    // const { data, error, isLoading, mutate } = useSWR(`/estimateData`, fetcher);
    // if (error) {
    //     toast({
    //         position: "top",
    //         variant: 'left-accent',
    //         status: 'error',
    //         isClosable: true,
    //         title: 'No Estimate Available...!',

    //     })
    //     onClose()
    // }
    // useEffect(() => {
    //     estimate?.estimate.map((e) => {

    //         setTotal(prevState => Number(prevState) + Number(e.price))
    //     })
    // }, [estimate]);

    useEffect(() => {
        setTotal(0)
        try {
            axios.post('/estimateData', { userId, managerId }).then((response) => {

                if (response.status === 201) {

                    setEstimate(response.data)
                    response.data.estimate.map((e) => { setTotal(prevState => Number(prevState) + Number(e.price)) })
                } else {
                    toast({
                        position: "top",
                        variant: 'left-accent',
                        status: 'error',
                        isClosable: true,
                        title: 'No Estimate Available...!',

                    })
                    onClose()
                }
            })
        } catch (error) {
            toast({
                position: "top",
                variant: 'left-accent',
                status: 'error',
                isClosable: true,
                title: 'No Estimate Available...!',

            })
            onClose()
        }
    }, [visible]);

    if (!visible) return null;
    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center'>

            <div className='bg-white w-[700px] pb-5 min-h-[500px] flex flex-col rounded-3xl m-2'>
                <div className='flex flex-row-reverse text-4xl p-4 border-b-2 border-black'>
                    <button onClick={onClose} ><AiFillCloseCircle /></button>
                </div>
                <div className='h-full w-full flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-semibold mb-8'>Add Service</h1>



                    {estimate?.estimate && (
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
                                    {estimate?.estimate.map((e) =>
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
                                    <Tr>
                                        <Th>Advance</Th>
                                        <Th></Th>
                                        <Th>{total / 2}</Th>
                                    </Tr>
                                </Tfoot>


                            </Table>


                        </TableContainer>
                    )}

                    <button className='bg-green-500 hover:bg-green-600 rounded-3xl h-16 w-[60%] text-lg font-medium mt-6 p-4 uppercase'>save</button>
                </div>
            </div>


        </div >
    )
}

export default ShowEstimateModal