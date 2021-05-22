import React, { useState, useEffect } from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { Text } from 'react-native-animatable';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Password({onPress}: {onPress: ()=> void}) {
  // 비밀번호 text 보이는것 조정 함수
  const [isShow, setIsShow]= useState(false)
  const updateSecureTextEntry = () => { setIsShow(!isShow) }

  // 패스워드 입력 함수 (이름에 따라 패스워드를 받기)
  let [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword ]= useState<string>('')
  const [isValid,setIsValid]=useState(false)
  const [isMatch, setIsMatch] = useState<boolean>(false)  
  
  useEffect(
      ()=>{ 
        validation()
      },[password, rePassword]
    )
  
  // 유효성 검사 함수
  const validation =() => {
    const passwordReg =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/; // 영문자, 숫자 포함(10~16자)
    const specialChar = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자 reg
    const koreanChar = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi; // 한글reg

    const hasEveryCharacter = passwordReg.test(password);
    const noSpecialCharacter= specialChar.test(password) || specialChar.test(rePassword) 
    const noKoreanCharacter = koreanChar.test(password) || koreanChar.test(rePassword)
    const isLongerThanTen = password.length >=10? true: false;

    if (password) {
      if (hasEveryCharacter && isLongerThanTen && !noSpecialCharacter && !noKoreanCharacter) {setIsValid(true)}
      else {setIsValid(false), setIsMatch(false)}
    }
    if (!password || !rePassword || password !== rePassword) {setIsMatch(false)}
   else {setIsMatch(true)}
  };

  return (
    <>
      <View style={styles.topBox}/>
        <View style={styles.headerContainer} >
          <Text style={styles.title} >이메일 회원가입</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputBox}>
            <TextInput 
              style={styles.passwordInput} 
              placeholder="비밀번호" 
              placeholderTextColor="#D8D8D8" 
              autoCapitalize="none" 
              keyboardAppearance="default"
              secureTextEntry={isShow} 
              onChangeText= {(value: string)=> setPassword(value)}
              />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {isShow? 
              <Feather name='eye-off' size={24} color="#E0E0E1"/> :
              <Feather name='eye' size={24} color="#E0E0E1"/>
              }
            </TouchableOpacity>
          </View>
          <Text style={styles.invalidMessage}>
            {password.length !== 0 && 
              (!isValid? "10~16자 영문과 숫자를 조합해주세요.": '올바른 형태의 비밀번호 입니다.')}
          </Text>

          <View style={styles.inputBox}>
            <TextInput 
              style={styles.passwordInput} 
              placeholder="비밀번호 확인"  
              placeholderTextColor="#D8D8D8" 
              autoCapitalize="none" 
              secureTextEntry={isShow}
             onChangeText= {(value:string)=> setRePassword( value)}
              />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {isShow? 
              <Feather name='eye-off' size={24} color="#E0E0E1"/> :
              <Feather name='eye' size={24} color="#E0E0E1"/>}
            </TouchableOpacity>
          </View>
          <Text >
            {rePassword.length !== 0 && 
              (!isMatch? "10~16자 영문과 숫자를 조합해주세요.": "위의 비밀번호와 일치합니다.")}  
          </Text>  
      </View>
          <TouchableOpacity style={styles.nextBtn} onPress={onPress}>
             <Text style={styles.btnText}>다음</Text>
          </TouchableOpacity> 
    </>
  );
}