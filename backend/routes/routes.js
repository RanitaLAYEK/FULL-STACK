const express = require('express');
const router = express.Router()
const userService=require('../Controllers/userService');
const {findUserById,createUser,updateUser,deleteUser,findUserByEmployeeId}=require('../Controllers/userService');


// define the home page route
router.get('/', async (req, res) => {
    const result = await userService.findUsers();
    res.json(result);
  })

  router.get('/:id', async (req, res) => {
    const result = await findUserById(req.params.id);
    res.json(result);
  })

  router.get('/employee/:employeeId', async (req, res) => {
    //const result = await findUserByEmployeeId(parseInt(req.params.employeeId));
    const result = await findUserByEmployeeId(req.params.employeeId);
    res.json(result);
  })

  
  router.post('/adduser', async (req, res) => {
    //const result = await createUser(req.body);
    const result = await createUser({
      name: req.body.name,
      //last_name: req.body.last_name,
      reportingManager: req.body.reportingManager,
      technicalLead: req.body.technicalLead,
      // resource_status: req.body.resource_status,
      // gender: req.body.gender,
      employeeId: req.body.employeeId,
      // global_id: req.body.global_id,
      // skill: req.body.skill,
      // technology: req.body.technology,
      // bu: req.body.bu,
      // resource_type: req.body.resource_type,
      // grade: req.body.grade,
      // pyramid: req.body.pyramid,
      // base_location: req.body.base_location,
      // anchor_location: req.body.anchor_location,
      // sso_id: req.body.sso_id,
      // cg_email: req.body.cg_email,
      // axa_email: req.body.axa_email,
      // cg_start_date: req.body.cg_start_date,
      // axa_start_date: req.body.axa_start_date,
      // axa_billing_date: req.body.axa_billing_date,
      // axa_contract_renewal: req.body.axa_contract_renewal,
      // plan_view_setup: req.body.plan_view_setup,
      // current_squad: req.body.current_squad,
      // address: req.body.address,
      // phone_number: req.body.phone_number,
      // alternate_phone_number: req.body.alternate_phone_number,
      // user_id: req.body.user_id,
      // project_code: req.body.project_code,
      // remote_desktop: req.body.remote_desktop,
      // onboarding_ticket: req.body.onboarding_ticket,
      // offboarding_ticket: req.body.offboarding_ticket,
      // release_date: req.body.release_date,
      // resigned: req.body.resigned,
      // comments: req.body.comments   
  }) 

  
  const adduser=await result.save();   
    res.json(adduser);
  })

//   router.post('/searchuser', async (req, res) => {
    
//     const result = await searchUser({
//       name: req.body.name,
//       reportingManager: req.body.reportingManager,
//       technicalLead: req.body.technicalLead,
//       employeeId: req.body.employeeId   
//   }) 

// })

  router.put('/updateuser/:id', async (req, res) => {
    const result = await updateUser(req.params.id,req.body);
    res.json(result);
  })

  router.delete('/deleteuser/:id', async (req, res) => {
    const result = await deleteUser(req.params.id);
    res.json(result);
  })

module.exports = router
