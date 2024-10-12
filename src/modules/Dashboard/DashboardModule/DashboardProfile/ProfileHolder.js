function ProfileHolder(){
    return(
        <div className="form-wrapper">
            <form method="POST" action="https://www.eworldtrade.com/member/profile/2243170" accept-charset="UTF-8" className="" data-parsley-required="false" name="update_profile" enctype="multipart/form-data" novalidate="">
                <input name="_method" type="hidden" value="PUT"/>
                <input name="_token" type="hidden" value="3qzTkiQCeVkw95nkIJ65NoerQKC8SNC29l5JIuoQ"/>
                <div className="company-prof">
                <div className="col-md-6 table-responsive table-col-pad">
                    <table className="table" border="1" cellspacing="1" cellpadding="0">
                    <thead>
                        <tr>
                        <th>
                            <span>Basic </span> Information
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <label>Fullname</label>
                        </td>
                        <td>
                            <input required="" type="text" name="full_name" value="Milad Hosseini"/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Industry</label>
                        </td>
                        <td>
                            <select className="" id="industry_id" name="industry_id">
                            <option value="1">Agriculture</option>
                            <option value="338">Apparel</option>
                            <option value="888">Automobiles &nbsp;&amp; Motorcycles</option>
                            <option value="2358">Beauty &amp; Personal Care</option>
                            <option value="4907">Business Services</option>
                            <option value="4128">Chemicals</option>
                            <option value="1354" selected="selected">Computer Hardware &amp; Software</option>
                            <option value="2566">Construction &amp; Real Estate</option>
                            <option value="1569">Consumer Electronic</option>
                            <option value="1745">Electrical Equipment&nbsp;Supplies</option>
                            <option value="4324">Energy</option>
                            <option value="4363">Environment</option>
                            <option value="722">Fashion Accessories</option>
                            <option value="5356">Fish &amp; Aquarium</option>
                            <option value="132">Food &amp; Beverage</option>
                            <option value="3139">Furniture</option>
                            <option value="2064">Gifts &amp; Crafts</option>
                            <option value="3806">Hardware</option>
                            <option value="2227">Health &amp; Medical</option>
                            <option value="2711">Home &amp; Garden</option>
                            <option value="1436">Home Appliances</option>
                            <option value="3528">Industrial Parts &amp; Fabrication Services</option>
                            <option value="2969">Lights &amp; Lighting</option>
                            <option value="1211">Luggage, Bags &amp; Cases</option>
                            <option value="3284">Machinery</option>
                            <option value="3843">Measurement &amp; Analysis Instruments</option>
                            <option value="3943">Minerals &amp; Metallurgy</option>
                            <option value="5406">Natural Stone</option>
                            <option value="4514">Office &amp; School Supplies</option>
                            <option value="4382">Packaging &amp; Printing</option>
                            <option value="4242">Rubber &amp; Plastics</option>
                            <option value="1659">Security &amp; Protection</option>
                            <option value="4668">Service Equipment</option>
                            <option value="1277">Shoes &amp; Footwear Accessories</option>
                            <option value="1900">Sports &amp; Entertainment</option>
                            <option value="5459">T Telecommunication</option>
                            <option value="1854">Telecommunication</option>
                            <option value="555">Textile &amp; Leather Product</option>
                            <option value="814">Timepieces, Jewelry &amp; Eyewear</option>
                            <option value="3705">Tools</option>
                            <option value="2139">Toys &amp; Hobbies</option>
                            <option value="1074">Transportation</option>
                            <option value="5376">Manufacturers of Construction and Mining Tools</option>
                            <option value="2886">Pet Cleaning Grooming Products</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Products</label>
                        </td>
                        <td>
                            <input type="text" name="products_want" value="Monitoring System"/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Gender</label>
                        </td>
                        <td>
                            <select name="gender">
                            <option value="">Select gender...</option>
                            <option value="male" selected="selected">Male</option>
                            <option value="female">Female</option>
                            </select>
                        </td>
                        </tr>
                        <tr >
                        <td>
                            <label>Phone Number</label>
                        </td>
                        <td>
                            <input required="" type="tel" name="phone_number" value="+989214234099"/>
                        </td>
                        </tr>
                        <tr >
                        <td>
                            <label>Mobile Number</label>
                        </td>
                        <td>
                            <input type="tel" name="mobile_number" value=""/>
                        </td>
                        </tr>
                        <tr >
                        <td>
                            <label>Fax</label>
                        </td>
                        <td>
                            <input type="tel" name="fax" value=""/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Profile Image</label>
                        </td>
                        <td>
                            <a href="https://www.eworldtrade.com/member/change-profile">Change Image</a>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Address</label>
                        </td>
                        <td>
                            <input type="text" name="address" value="Sari"/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>City</label>
                        </td>
                        <td>
                            <input type="text" name="city" value="Sari"/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Province / State</label>
                        </td>
                        <td>
                            <input type="text" name="state" value="Mazandaran"/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Country</label>
                        </td>
                        <td>
                            <select name="country_id">
                            <option value="">Select country...</option>
                            <option value="2">Afghanistan</option>
                            <option value="5">Åland Islands</option>
                            <option value="6">Albania</option>
                            <option value="64">Algeria</option>
                            <option value="11">American Samoa</option>
                            <option value="7">Andorra</option>
                            <option value="3">Angola</option>
                            <option value="4">Anguilla</option>
                            <option value="12">Antarctica</option>
                            <option value="14">Antigua and Barbuda</option>
                            <option value="9">Argentina</option>
                            <option value="10">Armenia</option>
                            <option value="1">Aruba</option>
                            <option value="15">Australia</option>
                            <option value="16">Austria</option>
                            <option value="17">Azerbaijan</option>
                            <option value="25">Bahamas</option>
                            <option value="24">Bahrain</option>
                            <option value="22">Bangladesh</option>
                            <option value="33">Barbados</option>
                            <option value="28">Belarus</option>
                            <option value="19">Belgium</option>
                            <option value="29">Belize</option>
                            <option value="20">Benin</option>
                            <option value="30">Bermuda</option>
                            <option value="35">Bhutan</option>
                            <option value="31">Bolivia</option>
                            <option value="26">Bosnia and Herzegovina</option>
                            <option value="37">Botswana</option>
                            <option value="36">Bouvet Island</option>
                            <option value="32">Brazil</option>
                            <option value="105">British Indian Ocean Territory</option>
                            <option value="239">British Virgin Islands</option>
                            <option value="34">Brunei</option>
                            <option value="23">Bulgaria</option>
                            <option value="21">Burkina Faso</option>
                            <option value="18">Burundi</option>
                            <option value="119">Cambodia</option>
                            <option value="45">Cameroon</option>
                            <option value="39">Canada</option>
                            <option value="51">Cape Verde</option>
                            <option value="56">Cayman Islands</option>
                            <option value="38">Central African Republic</option>
                            <option value="216">Chad</option>
                            <option value="42">Chile</option>
                            <option value="43">China</option>
                            <option value="55">Christmas Island</option>
                            <option value="40">Cocos (Keeling) Islands</option>
                            <option value="49">Colombia</option>
                            <option value="50">Comoros</option>
                            <option value="48">Cook Islands</option>
                            <option value="52">Costa Rica</option>
                            <option value="99">Croatia</option>
                            <option value="53">Cuba</option>
                            <option value="54">Curaçao</option>
                            <option value="57">Cyprus</option>
                            <option value="58">Czechia</option>
                            <option value="62">Denmark</option>
                            <option value="60">Djibouti</option>
                            <option value="61">Dominica</option>
                            <option value="63">Dominican Republic</option>
                            <option value="46">DR Congo</option>
                            <option value="65">Ecuador</option>
                            <option value="66">Egypt</option>
                            <option value="200">El Salvador</option>
                            <option value="88">Equatorial Guinea</option>
                            <option value="67">Eritrea</option>
                            <option value="70">Estonia</option>
                            <option value="71">Ethiopia</option>
                            <option value="74">Falkland Islands</option>
                            <option value="76">Faroe Islands</option>
                            <option value="73">Fiji</option>
                            <option value="72">Finland</option>
                            <option value="75">France</option>
                            <option value="93">French Guiana</option>
                            <option value="186">French Polynesia</option>
                            <option value="13">French Southern and Antarctic Lands</option>
                            <option value="78">Gabon</option>
                            <option value="86">Gambia</option>
                            <option value="80">Georgia</option>
                            <option value="59">Germany</option>
                            <option value="82">Ghana</option>
                            <option value="83">Gibraltar</option>
                            <option value="89">Greece</option>
                            <option value="91">Greenland</option>
                            <option value="90">Grenada</option>
                            <option value="85">Guadeloupe</option>
                            <option value="94">Guam</option>
                            <option value="92">Guatemala</option>
                            <option value="81">Guernsey</option>
                            <option value="84">Guinea</option>
                            <option value="87">Guinea-Bissau</option>
                            <option value="95">Guyana</option>
                            <option value="100">Haiti</option>
                            <option value="97">Heard Island and McDonald Islands</option>
                            <option value="98">Honduras</option>
                            <option value="96">Hong Kong, China</option>
                            <option value="101">Hungary</option>
                            <option value="109">Iceland</option>
                            <option value="104">India</option>
                            <option value="102">Indonesia</option>
                            <option value="107" selected="selected">Iran</option>
                            <option value="108">Iraq</option>
                            <option value="106">Ireland</option>
                            <option value="103">Isle of Man</option>
                            <option value="110">Israel</option>
                            <option value="111">Italy</option>
                            <option value="44">Ivory Coast</option>
                            <option value="112">Jamaica</option>
                            <option value="115">Japan</option>
                            <option value="113">Jersey</option>
                            <option value="114">Jordan</option>
                            <option value="116">Kazakhstan</option>
                            <option value="117">Kenya</option>
                            <option value="120">Kiribati</option>
                            <option value="123">Kosovo</option>
                            <option value="124">Kuwait</option>
                            <option value="118">Kyrgyzstan</option>
                            <option value="125">Laos</option>
                            <option value="135">Latvia</option>
                            <option value="126">Lebanon</option>
                            <option value="132">Lesotho</option>
                            <option value="127">Liberia</option>
                            <option value="128">Libya</option>
                            <option value="130">Liechtenstein</option>
                            <option value="133">Lithuania</option>
                            <option value="134">Luxembourg</option>
                            <option value="136">Macau</option>
                            <option value="145">Macedonia</option>
                            <option value="141">Madagascar</option>
                            <option value="157">Malawi</option>
                            <option value="158">Malaysia</option>
                            <option value="142">Maldives</option>
                            <option value="146">Mali</option>
                            <option value="147">Malta</option>
                            <option value="144">Marshall Islands</option>
                            <option value="155">Martinique</option>
                            <option value="153">Mauritania</option>
                            <option value="156">Mauritius</option>
                            <option value="159">Mayotte</option>
                            <option value="143">Mexico</option>
                            <option value="77">Micronesia</option>
                            <option value="140">Moldova</option>
                            <option value="139">Monaco</option>
                            <option value="150">Mongolia</option>
                            <option value="149">Montenegro</option>
                            <option value="154">Montserrat</option>
                            <option value="138">Morocco</option>
                            <option value="152">Mozambique</option>
                            <option value="148">Myanmar</option>
                            <option value="160">Namibia</option>
                            <option value="170">Nauru</option>
                            <option value="169">Nepal</option>
                            <option value="167">Netherlands</option>
                            <option value="161">New Caledonia</option>
                            <option value="171">New Zealand</option>
                            <option value="165">Nicaragua</option>
                            <option value="162">Niger</option>
                            <option value="164">Nigeria</option>
                            <option value="166">Niue</option>
                            <option value="163">Norfolk Island</option>
                            <option value="182">North Korea</option>
                            <option value="151">Northern Mariana Islands</option>
                            <option value="168">Norway</option>
                            <option value="172">Oman</option>
                            <option value="173">Pakistan</option>
                            <option value="178">Palau</option>
                            <option value="185">Palestine</option>
                            <option value="174">Panama</option>
                            <option value="179">Papua New Guinea</option>
                            <option value="184">Paraguay</option>
                            <option value="176">Peru</option>
                            <option value="177">Philippines</option>
                            <option value="175">Pitcairn Islands</option>
                            <option value="180">Poland</option>
                            <option value="183">Portugal</option>
                            <option value="181">Puerto Rico</option>
                            <option value="187">Qatar</option>
                            <option value="47">Republic of the Congo</option>
                            <option value="188">Réunion</option>
                            <option value="189">Romania</option>
                            <option value="190">Russia</option>
                            <option value="191">Rwanda</option>
                            <option value="27">Saint Barthélemy</option>
                            <option value="121">Saint Kitts and Nevis</option>
                            <option value="129">Saint Lucia</option>
                            <option value="137">Saint Martin</option>
                            <option value="203">Saint Pierre and Miquelon</option>
                            <option value="237">Saint Vincent and the Grenadines</option>
                            <option value="244">Samoa</option>
                            <option value="201">San Marino</option>
                            <option value="206">São Tomé and Príncipe</option>
                            <option value="192">Saudi Arabia</option>
                            <option value="194">Senegal</option>
                            <option value="204">Serbia</option>
                            <option value="213">Seychelles</option>
                            <option value="199">Sierra Leone</option>
                            <option value="195">Singapore</option>
                            <option value="212">Sint Maarten</option>
                            <option value="208">Slovakia</option>
                            <option value="209">Slovenia</option>
                            <option value="198">Solomon Islands</option>
                            <option value="202">Somalia</option>
                            <option value="246">South Africa</option>
                            <option value="196">South Georgia</option>
                            <option value="122">South Korea</option>
                            <option value="205">South Sudan</option>
                            <option value="69">Spain</option>
                            <option value="131">Sri Lanka</option>
                            <option value="193">Sudan</option>
                            <option value="207">Suriname</option>
                            <option value="197">Svalbard and Jan Mayen</option>
                            <option value="211">Swaziland</option>
                            <option value="210">Sweden</option>
                            <option value="41">Switzerland</option>
                            <option value="214">Syria</option>
                            <option value="228">Taiwan, China</option>
                            <option value="219">Tajikistan</option>
                            <option value="229">Tanzania</option>
                            <option value="218">Thailand</option>
                            <option value="222">Timor-Leste</option>
                            <option value="217">Togo</option>
                            <option value="220">Tokelau</option>
                            <option value="223">Tonga</option>
                            <option value="224">Trinidad and Tobago</option>
                            <option value="225">Tunisia</option>
                            <option value="226">Turkey</option>
                            <option value="221">Turkmenistan</option>
                            <option value="215">Turks and Caicos Islands</option>
                            <option value="227">Tuvalu</option>
                            <option value="230">Uganda</option>
                            <option value="231">Ukraine</option>
                            <option value="8">United Arab Emirates</option>
                            <option value="79">United Kingdom</option>
                            <option value="234">United States</option>
                            <option value="232">United States Minor Outlying Islands</option>
                            <option value="240">United States Virgin Islands</option>
                            <option value="233">Uruguay</option>
                            <option value="235">Uzbekistan</option>
                            <option value="242">Vanuatu</option>
                            <option value="236">Vatican City</option>
                            <option value="238">Venezuela</option>
                            <option value="241">Vietnam</option>
                            <option value="243">Wallis and Futuna</option>
                            <option value="68">Western Sahara</option>
                            <option value="245">Yemen</option>
                            <option value="247">Zambia</option>
                            <option value="248">Zimbabwe</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Zip Code / Postal Code</label>
                        </td>
                        <td>
                            <input type="text" name="zipcode" value="4818786364"/>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-md-6 table-responsive table-col-pad">
                    <table className="table" border="1" cellspacing="1" cellpadding="0">
                    <thead>
                        <tr>
                        <th>
                            <span>Account </span> Information
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <label>I am a</label>
                        </td>
                        <td className="instant_notify_td  checkboxs">
                            Seller
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Member Id</label>
                        </td>
                        <td>2243170</td>
                        </tr>
                        <tr>
                        <td>
                            <label>Package Name</label>
                        </td>
                        <td>Free</td>
                        </tr>
                        <tr>
                        <td>
                            <label>Expiry Date </label>
                        </td>
                        <td> Unlimited </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Change Password</label>
                        </td>
                        <td>
                            <a href="https://www.eworldtrade.com/member/change-password">Click Here</a>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-xs-12 col-md-6 mt-20 table-responsive table-col-pad">
                    <table className="table" border="1" cellspacing="1" cellpadding="0" style={{marginTop: "0"}}>
                    <thead>
                        <tr>
                        <th colspan="2">Preferred Instant Messenger ID(s) </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <label>QQ ID</label>
                        </td>
                        <td>
                            <input type="text" name="qq" value=""/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Skype</label>
                        </td>
                        <td>
                            <input type="text" name="skype" value=""/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Wechat ID</label>
                        </td>
                        <td>
                            <input type="text" name="wechat" value=""/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <label>Whatsapp</label>
                        </td>
                        <td>
                            <input type="tel" name="whatsapp" value=""/>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-md-12 profile-btn">
                    <div className="submit button-sav">
                    <button type="submit" className="btn-dash btn-submit">Update</button>
                    <p>Once submitted, no further editing is allowed within one working day.</p>
                    </div>
                </div>
                </div>
            </form>
            </div>
    )
}
export default ProfileHolder