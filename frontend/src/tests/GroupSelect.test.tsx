import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import {beforeEach, vi} from 'vitest';
import {getMemos} from '../repositories/MemoRepository.ts';

vi.mock('../repositories/MemoRepository.ts');

describe('組名入力機能', () => {
    beforeEach(()=>{
        vi.resetAllMocks()
        vi.mocked(getMemos).mockResolvedValue({memos: []})
    })
  test('"組"テキストとプルダウンが表示される', async () => {
    render(<App />);

    expect(await screen.findByText('組')).toBeInTheDocument();
    const select = screen.getByRole('combobox', { name: /組名/i });
    expect(select).toBeInTheDocument();
    expect(select).toHaveDisplayValue(''); // 初期値なし
  });

  test('プルダウンをクリックすると選択肢が表示される', async () => {
    render(<App />);

    const select = screen.getByRole('combobox', { name: /組名/i });
    await userEvent.click(select);
    expect(screen.getByRole('option', { name: 'KT131' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'KT141' })).toBeInTheDocument();
  });

  test('組名を選択できる', async () => {
    render(<App />);

    const select = screen.getByRole('combobox', { name: /組名/i });
    await userEvent.selectOptions(select, 'KT131');
    expect(select).toHaveValue('KT131');
    await userEvent.selectOptions(select, 'KT141');
    expect(select).toHaveValue('KT141');
  });
});
