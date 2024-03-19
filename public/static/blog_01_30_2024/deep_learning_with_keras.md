```python
from keras import models
```


```python
from keras import layers
```


```python
from keras.datasets import imdb
import numpy as np
from keras import models
from keras import layers
```

https://keras.io/api/datasets/imdb/

https://ai.stanford.edu/~amaas/data/sentiment/


```python
(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)
```

    Downloading data from https://storage.googleapis.com/tensorflow/tf-keras-datasets/imdb.npz
    17464789/17464789 [==============================] - 0s 0us/step



```python
train_data[0]
```




    [1,
     14,
     22,
     16,
     43,
     530,
     973,
     1622,
     1385,
     65,
     458,
     4468,
     66,
     3941,
     4,
     173,
     36,
     256,
     5,
     25,
     100,
     43,
     838,
     112,
     50,
     670,
     2,
     9,
     35,
     480,
     284,
     5,
     150,
     4,
     172,
     112,
     167,
     2,
     336,
     385,
     39,
     4,
     172,
     4536,
     1111,
     17,
     546,
     38,
     13,
     447,
     4,
     192,
     50,
     16,
     6,
     147,
     2025,
     19,
     14,
     22,
     4,
     1920,
     4613,
     469,
     4,
     22,
     71,
     87,
     12,
     16,
     43,
     530,
     38,
     76,
     15,
     13,
     1247,
     4,
     22,
     17,
     515,
     17,
     12,
     16,
     626,
     18,
     2,
     5,
     62,
     386,
     12,
     8,
     316,
     8,
     106,
     5,
     4,
     2223,
     5244,
     16,
     480,
     66,
     3785,
     33,
     4,
     130,
     12,
     16,
     38,
     619,
     5,
     25,
     124,
     51,
     36,
     135,
     48,
     25,
     1415,
     33,
     6,
     22,
     12,
     215,
     28,
     77,
     52,
     5,
     14,
     407,
     16,
     82,
     2,
     8,
     4,
     107,
     117,
     5952,
     15,
     256,
     4,
     2,
     7,
     3766,
     5,
     723,
     36,
     71,
     43,
     530,
     476,
     26,
     400,
     317,
     46,
     7,
     4,
     2,
     1029,
     13,
     104,
     88,
     4,
     381,
     15,
     297,
     98,
     32,
     2071,
     56,
     26,
     141,
     6,
     194,
     7486,
     18,
     4,
     226,
     22,
     21,
     134,
     476,
     26,
     480,
     5,
     144,
     30,
     5535,
     18,
     51,
     36,
     28,
     224,
     92,
     25,
     104,
     4,
     226,
     65,
     16,
     38,
     1334,
     88,
     12,
     16,
     283,
     5,
     16,
     4472,
     113,
     103,
     32,
     15,
     16,
     5345,
     19,
     178,
     32]




```python
train_labels[0]
```




    1




```python
max([max(sequence) for sequence in train_data])
```




    9999




```python
word_index = imdb.get_word_index()
```


```python
reverse_word_index = dict([(value, key) for (key, value) in word_index.items()])
```


```python
decoded_review = ' '.join([reverse_word_index.get(i-3, '?') for i in train_data[0]])
```

## Pad and one hot encode vectors

Neural networks accept tensors, therefore we have to reshape and convert to 1/0s
.


```python
import numpy as np
```


```python
def vectorize_sequences(sequences, dimension=10000):
    results = np.zeros((len(sequences), dimension))
    for i, sequence in enumerate(sequences):
        results[i, sequence] = 1
    return results

x_train = vectorize_sequences(train_data)
x_test = vectorize_sequences(test_data)
```


```python
x_train[0]
```




    array([0., 1., 1., ..., 0., 0., 0.])




```python
y_train = np.asarray(train_labels).astype('float32')
y_test = np.asarray(test_labels).astype('float32')

```


```python


model = models.Sequential()
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(1, activation='sigmoid'))
```


```python
model.compile(optimizer='rmsprop',
              loss = 'binary_crossentropy',
              metrics=['accuracy'])
```


```python
x_val = x_train[:10000]
partial_x_train = x_train[10000:]
```


```python
y_val = y_train[:10000]
partial_y_train = y_train[10000:]
```


```python
model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['acc'])

history = model.fit(partial_x_train,
                    partial_y_train,
                    epochs=20,
                    batch_size=512,
                    validation_data=(x_val, y_val))

```

    Epoch 1/20
    30/30 [==============================] - 4s 109ms/step - loss: 0.5163 - acc: 0.7796 - val_loss: 0.4044 - val_acc: 0.8426
    Epoch 2/20
    30/30 [==============================] - 1s 38ms/step - loss: 0.3195 - acc: 0.8942 - val_loss: 0.3588 - val_acc: 0.8462
    Epoch 3/20
    30/30 [==============================] - 1s 41ms/step - loss: 0.2425 - acc: 0.9181 - val_loss: 0.2931 - val_acc: 0.8848
    Epoch 4/20
    30/30 [==============================] - 2s 59ms/step - loss: 0.1973 - acc: 0.9331 - val_loss: 0.2758 - val_acc: 0.8896
    Epoch 5/20
    30/30 [==============================] - 2s 63ms/step - loss: 0.1639 - acc: 0.9469 - val_loss: 0.2789 - val_acc: 0.8871
    Epoch 6/20
    30/30 [==============================] - 2s 59ms/step - loss: 0.1385 - acc: 0.9554 - val_loss: 0.2863 - val_acc: 0.8853
    Epoch 7/20
    30/30 [==============================] - 1s 49ms/step - loss: 0.1211 - acc: 0.9621 - val_loss: 0.2963 - val_acc: 0.8846
    Epoch 8/20
    30/30 [==============================] - 2s 63ms/step - loss: 0.1017 - acc: 0.9701 - val_loss: 0.3134 - val_acc: 0.8796
    Epoch 9/20
    30/30 [==============================] - 1s 43ms/step - loss: 0.0904 - acc: 0.9727 - val_loss: 0.3247 - val_acc: 0.8803
    Epoch 10/20
    30/30 [==============================] - 1s 49ms/step - loss: 0.0753 - acc: 0.9792 - val_loss: 0.3424 - val_acc: 0.8798
    Epoch 11/20
    30/30 [==============================] - 1s 37ms/step - loss: 0.0684 - acc: 0.9808 - val_loss: 0.3666 - val_acc: 0.8799
    Epoch 12/20
    30/30 [==============================] - 1s 44ms/step - loss: 0.0534 - acc: 0.9879 - val_loss: 0.4051 - val_acc: 0.8700
    Epoch 13/20
    30/30 [==============================] - 1s 41ms/step - loss: 0.0494 - acc: 0.9884 - val_loss: 0.4055 - val_acc: 0.8769
    Epoch 14/20
    30/30 [==============================] - 1s 36ms/step - loss: 0.0409 - acc: 0.9917 - val_loss: 0.4559 - val_acc: 0.8718
    Epoch 15/20
    30/30 [==============================] - 1s 34ms/step - loss: 0.0345 - acc: 0.9935 - val_loss: 0.4468 - val_acc: 0.8748
    Epoch 16/20
    30/30 [==============================] - 1s 46ms/step - loss: 0.0288 - acc: 0.9948 - val_loss: 0.4730 - val_acc: 0.8724
    Epoch 17/20
    30/30 [==============================] - 2s 64ms/step - loss: 0.0245 - acc: 0.9963 - val_loss: 0.4915 - val_acc: 0.8713
    Epoch 18/20
    30/30 [==============================] - 2s 59ms/step - loss: 0.0208 - acc: 0.9970 - val_loss: 0.5434 - val_acc: 0.8693
    Epoch 19/20
    30/30 [==============================] - 1s 48ms/step - loss: 0.0180 - acc: 0.9975 - val_loss: 0.5403 - val_acc: 0.8681
    Epoch 20/20
    30/30 [==============================] - 1s 35ms/step - loss: 0.0118 - acc: 0.9993 - val_loss: 0.6444 - val_acc: 0.8528



```python
history_dict = history.history
import matplotlib.pyplot as plt

history_dict = history.history
loss_values = history_dict['loss']
val_loss_values = history_dict['val_loss']
acc = history_dict['acc']

epochs = range(1, len(acc) + 1)
```


```python
plt.plot(epochs, loss_values, 'bo', label='Training loss')
plt.plot(epochs, val_loss_values, 'b', label='Validation loss value')
plt.title('Training and validation loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()

plt.show()
```


    
![png](deep_learning_with_keras_files/deep_learning_with_keras_22_0.png)
    



```python
plt.clf()
acc_values = history_dict['acc']
val_acc_values = history_dict['val_acc']

plt.plot(epochs, acc, 'bo', label='Training acc')
plt.plot(epochs, val_acc_values, 'b', label='Validation acc')
plt.title('Training and validation accuracy')
plt.xlabel('Epochs')
plt.ylabel('Loss')

plt.legend()

plt.show()

```


    
![png](deep_learning_with_keras_files/deep_learning_with_keras_23_0.png)
    



```python
model = models.Sequential()
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu'))
model.add(layers.Dense(1, activation='sigmoid'))

model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['accuracy'])

model.fit(x_train, y_train, epochs=4, batch_size=512)
results = model.evaluate(x_test, y_test)
```

    Epoch 1/4
    49/49 [==============================] - 2s 25ms/step - loss: 0.4748 - accuracy: 0.8086
    Epoch 2/4
    49/49 [==============================] - 2s 32ms/step - loss: 0.2786 - accuracy: 0.9001
    Epoch 3/4
    49/49 [==============================] - 2s 40ms/step - loss: 0.2192 - accuracy: 0.9203
    Epoch 4/4
    49/49 [==============================] - 2s 38ms/step - loss: 0.1868 - accuracy: 0.9329
    782/782 [==============================] - 2s 3ms/step - loss: 0.2881 - accuracy: 0.8867



```python
results
```




    [0.288115531206131, 0.886680006980896]




```python
model.predict(x_test)
```

    782/782 [==============================] - 2s 3ms/step





    array([[0.22613   ],
           [0.9990285 ],
           [0.910198  ],
           ...,
           [0.1431206 ],
           [0.11074253],
           [0.589874  ]], dtype=float32)




```python
x_test.shape
```




    (25000, 10000)




```python
x_train.shape
```




    (25000, 10000)




```python
len(x_train)
```




    25000



# Experiments
## Use three hidden layers


```python
model = models.Sequential()
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))

model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['accuracy'])

history = model.fit(x_train, y_train, epochs=5, batch_size=512, validation_data=(x_val, y_val))
```


```python
epochs = range(1, 5+1)
plt.clf()
plt.plot(epochs, history.history['loss'], 'bo', label='Training loss')
plt.plot(epochs, history.history['val_loss'], label='Validation loss value')

plt.title("Training and validation loss")
plt.xlabel("Epochs")
plt.ylabel("Loss")

plt.legend()
plt.show()
```


```python
results
```


```python
results = model.evaluate(x_test, y_test)
results
```


```python
model = models.Sequential()
model.add(layers.Dense(32, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(32, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(16, activation='relu', input_shape=(10000,)))
model.add(layers.Dense(8, activation='relu', input_shape=(10000,)))

model.add(layers.Dense(1, activation='sigmoid'))

model.compile(optimizer='rmsprop',
              loss='binary_crossentropy',
              metrics=['accuracy'])

history = model.fit(x_train, y_train, epochs=10, batch_size=512, validation_data=(x_val, y_val))
```

    Epoch 1/10
    49/49 [==============================] - 4s 65ms/step - loss: 0.4975 - accuracy: 0.7690 - val_loss: 0.2964 - val_accuracy: 0.9001
    Epoch 2/10
    49/49 [==============================] - 2s 45ms/step - loss: 0.2797 - accuracy: 0.8914 - val_loss: 0.1895 - val_accuracy: 0.9415
    Epoch 3/10
    49/49 [==============================] - 2s 39ms/step - loss: 0.2199 - accuracy: 0.9184 - val_loss: 0.1508 - val_accuracy: 0.9532
    Epoch 4/10
    49/49 [==============================] - 2s 45ms/step - loss: 0.1828 - accuracy: 0.9317 - val_loss: 0.2246 - val_accuracy: 0.9041
    Epoch 5/10
    49/49 [==============================] - 3s 53ms/step - loss: 0.1544 - accuracy: 0.9440 - val_loss: 0.1021 - val_accuracy: 0.9708
    Epoch 6/10
    49/49 [==============================] - 2s 46ms/step - loss: 0.1371 - accuracy: 0.9506 - val_loss: 0.1494 - val_accuracy: 0.9401
    Epoch 7/10
    49/49 [==============================] - 2s 38ms/step - loss: 0.1044 - accuracy: 0.9641 - val_loss: 0.0878 - val_accuracy: 0.9701
    Epoch 8/10
    49/49 [==============================] - 2s 44ms/step - loss: 0.0946 - accuracy: 0.9664 - val_loss: 0.1043 - val_accuracy: 0.9591
    Epoch 9/10
    49/49 [==============================] - 2s 44ms/step - loss: 0.0741 - accuracy: 0.9756 - val_loss: 0.0403 - val_accuracy: 0.9912
    Epoch 10/10
    49/49 [==============================] - 2s 50ms/step - loss: 0.0599 - accuracy: 0.9807 - val_loss: 0.0325 - val_accuracy: 0.9939



```python
import matplotlib.pyplot as plt
plt.clf()
history_dict = history.history
acc_values = history_dict['accuracy']

val_acc_values = history_dict['val_accuracy']
epochs = range(1, 11)
plt.plot(epochs, acc_values, 'bo', label='Training acc')
plt.plot(epochs, val_acc_values, 'b', label='Validation acc')
plt.title('Training and validation accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')

plt.legend()

plt.show()
```


    
![png](deep_learning_with_keras_files/deep_learning_with_keras_36_0.png)
    



```python
history_dict
```




    {'loss': [0.47709500789642334,
      0.26381993293762207,
      0.2085842788219452,
      0.17902247607707977,
      0.15010398626327515],
     'accuracy': [0.7861999869346619,
      0.9017999768257141,
      0.9219200015068054,
      0.9334400296211243,
      0.9458400011062622],
     'val_loss': [0.30871260166168213,
      0.1904343068599701,
      0.14956478774547577,
      0.13556316494941711,
      0.10498819500207901],
     'val_accuracy': [0.8787000179290771,
      0.9370999932289124,
      0.9527999758720398,
      0.9562000036239624,
      0.9682999849319458]}




```python

```
