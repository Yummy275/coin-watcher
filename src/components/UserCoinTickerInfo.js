import React, { useState, useRef, useEffect } from 'react';
import getHoldAmount from '../data/getHoldAmount';
import deleteCoin from '../data/deleteCoin';
import updateCoinHoldAmount from '../data/updateCoinHoldAmount';

const styles = {
    mainContainer: 'flex m-2 p-2 bg-white rounded',
    coinImg: 'w-12',
    infoSection: 'ml-2',
    coinTitle: 'text-lg',
    deleteBtn: 'inline bg-transparent ml-2 px-1 text-red',
    holdInput: 'w-36 px-1',
    coinHold: 'cursor-pointer',
    coinTotal: 'italic underline',
};

const UserCoinTickerInfo = ({ coinInfo, updateUserCoins }) => {
    const holdInput = useRef(null);
    const holdAmount = getHoldAmount(coinInfo.id);
    const parsedPrice = parseFloat(coinInfo.price);
    const [updatingHoldAmt, setUpdatingHoldAmt] = useState(false);
    const [newHoldAmt, setNewHoldAmt] = useState('');

    const deleteUserCoin = () => {
        deleteCoin(coinInfo.id);
        updateUserCoins();
    };

    const toggleHoldInput = () => {
        if (updatingHoldAmt === false) {
            setUpdatingHoldAmt(true);
        } else {
            setUpdatingHoldAmt(false);
        }
    };

    useEffect(() => {
        if (updatingHoldAmt) {
            holdInput.current.focus();
        }
    });

    const updateHoldAmt = () => {
        if (newHoldAmt !== '' && newHoldAmt !== holdAmount) {
            updateCoinHoldAmount(coinInfo.id, newHoldAmt);
            updateUserCoins();
        }
    };

    const doneInputtingHold = () => {
        toggleHoldInput();
        updateHoldAmt();
    };

    const checkEnterPressOnInput = (e) => {
        if (e.key === 'Enter') {
            holdInput.current.blur();
        }
    };

    return (
        <div className={styles.mainContainer}>
            <img
                className={styles.coinImg}
                src={coinInfo.logo_url}
                alt="coin-logo"
            />
            <div className={styles.infoSection}>
                <div className={styles.coinTitle}>
                    {`${coinInfo.name} (${coinInfo.symbol}`})
                    <button
                        onClick={deleteUserCoin}
                        className={styles.deleteBtn}
                    >
                        X
                    </button>
                </div>
                <div>${parsedPrice.toFixed(2)}</div>
                <div onClick={toggleHoldInput} className={styles.coinHold}>
                    <span className={updatingHoldAmt ? 'hidden' : ''}>
                        x {holdAmount}
                    </span>
                    <input
                        type="number"
                        onChange={(e) => {
                            setNewHoldAmt(e.target.value);
                        }}
                        onKeyPress={(e) => checkEnterPressOnInput(e)}
                        onBlur={doneInputtingHold}
                        className={`${styles.holdInput} ${
                            updatingHoldAmt ? '' : 'hidden'
                        }`}
                        ref={holdInput}
                    />
                </div>
                <div className={styles.coinTotal}>
                    ${(parsedPrice * holdAmount).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default UserCoinTickerInfo;
